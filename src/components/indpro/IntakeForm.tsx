import { H5 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import { useEffect, useRef } from "react";
import useIndependentPro from "../../hooks/useIndependentPro";

const IntakeForm: React.FC = () => {
  const { c_jotFormId } = useIndependentPro();
  if (!c_jotFormId) return null;

  return (
    <div>
      <H5 as={"h2"} weight={"demi"} color={TextColor.pepper130} className="mb-5">
        Contact me
      </H5>
      <JotForm />
    </div>
  );
};

export default IntakeForm;

const JotForm: React.FC = () => {
  const { c_taxProName, c_jotFormId } = useIndependentPro();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // @ipentland: most of this is from the script provided by JotForm.
    // I've removed a few unused bits, and make some minor tweaks to make it TypeScript.

    const ifr = iframeRef.current;
    if (!ifr) return;

    let src = ifr.src;
    let iframeParams: string[] = [];
    if (window.location.href && window.location.href.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(
        window.location.href.substr(window.location.href.indexOf("?") + 1).split("&")
      );
    }
    if (src && src.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
      src = src.substr(0, src.indexOf("?"));
    }
    iframeParams.push("isIframeEmbed=1");
    ifr.src = src + "?" + iframeParams.join("&");

    const isPermitted = function (originUrl: string, whitelisted_domains: string[]) {
      const url = document.createElement("a");
      url.href = originUrl;
      const hostname = url.hostname;
      let result = false;
      if (typeof hostname !== "undefined") {
        whitelisted_domains.forEach(function (element) {
          if (
            hostname.slice(-1 * element.length - 1) === ".".concat(element) ||
            hostname === element
          ) {
            result = true;
          }
        });
        return result;
      }
    };

    const handleIFrameMessage = function (e: MessageEvent<unknown>) {
      if (typeof e.data !== "string") {
        return;
      }

      let iframe: HTMLIFrameElement | null = iframeRef.current;
      if (!iframe) {
        return;
      }

      const args = e.data.split(":");

      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          if (!isNaN(Number(args[1])) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
            iframe.style.minHeight = args[1] + "px";
          }
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
        // @ipentland: original script included this functionality. Completely and totally unsafe.
        // case "loadScript":
        // 	if (
        // 		!isPermitted(e.origin, ["jotform.com", "jotform.pro"])
        // 	) {
        // 		break;
        // 	}
        // 	let src = args[1];
        // 	if (args.length > 3) {
        // 		src = args[1] + ":" + args[2];
        // 	}
        // 	const script = document.createElement("script");
        // 	script.src = src;
        // 	script.type = "text/javascript";
        // 	document.body.appendChild(script);
        // 	break;
        case "exitFullscreen":
          if (window.document.exitFullscreen) window.document.exitFullscreen();
          // @ts-ignore
          else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
          // @ts-ignore
          else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
          // @ts-ignore
          else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
          // @ts-ignore
          else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
          break;
      }

      const isJotForm = e.origin.indexOf("jotform") > -1;

      if (isJotForm && iframe.contentWindow && "postMessage" in iframe.contentWindow) {
        const urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer),
        };
        iframe.contentWindow.postMessage(JSON.stringify({ type: "urls", value: urls }), "*");
      }
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
      // @ts-ignore
    } else if (window.attachEvent) {
      // @ts-ignore
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
    <iframe
      role={"document"}
      ref={iframeRef}
      title={`Contact form for ${c_taxProName}`}
      allowFullScreen={true}
      // @ipentland: original script included these three permissions. Seems sketchy and unnecessary.
      // allow="geolocation; microphone; camera"
      allow="fullscreen"
      src={`https://form.jotform.com/${c_jotFormId}`}
      className="max-w-full min-w-full border-none h-96"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

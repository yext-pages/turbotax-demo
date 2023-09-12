import { useEffect, useRef } from "react";

const ContactMe: React.FC = () => {
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		const ifr = iframeRef.current;
		if (!ifr) return;

		let src = ifr.src;
		let iframeParams: string[] = [];
		if (window.location.href && window.location.href.indexOf("?") > -1) {
			iframeParams = iframeParams.concat(
				window.location.href
					.substr(window.location.href.indexOf("?") + 1)
					.split("&"),
			);
		}
		if (src && src.indexOf("?") > -1) {
			iframeParams = iframeParams.concat(
				src.substr(src.indexOf("?") + 1).split("&"),
			);
			src = src.substr(0, src.indexOf("?"));
		}
		iframeParams.push("isIframeEmbed=1");
		ifr.src = src + "?" + iframeParams.join("&");

		const isPermitted = function (
			originUrl: string,
			whitelisted_domains: string[],
		) {
			const url = document.createElement("a");
			url.href = originUrl;
			const hostname = url.hostname;
			let result = false;
			if (typeof hostname !== "undefined") {
				whitelisted_domains.forEach(function (element) {
					if (
						hostname.slice(-1 * element.length - 1) ===
							".".concat(element) ||
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
					if (
						!isNaN(Number(args[1])) &&
						parseInt(iframe.style.minHeight) > parseInt(args[1])
					) {
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
					if (window.document.exitFullscreen)
						window.document.exitFullscreen();
					else if (window.document.mozCancelFullScreen)
						window.document.mozCancelFullScreen();
					else if (window.document.mozCancelFullscreen)
						window.document.mozCancelFullScreen();
					else if (window.document.webkitExitFullscreen)
						window.document.webkitExitFullscreen();
					else if (window.document.msExitFullscreen)
						window.document.msExitFullscreen();
					break;
			}

			var isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;

			if (
				isJotForm &&
				"contentWindow" in iframe &&
				"postMessage" in iframe.contentWindow
			) {
				var urls = {
					docurl: encodeURIComponent(document.URL),
					referrer: encodeURIComponent(document.referrer),
				};
				iframe.contentWindow.postMessage(
					JSON.stringify({ type: "urls", value: urls }),
					"*",
				);
			}
		};

		if (window.addEventListener) {
			window.addEventListener("message", handleIFrameMessage, false);
		} else if (window.attachEvent) {
			window.attachEvent("onmessage", handleIFrameMessage);
		}
	}, []);

	return (
		<iframe
			ref={iframeRef}
			title="TIP Pro - Maria"
			allowTransparency={true}
			allowFullScreen={true}
			// @ipentland: original script included these three permissions. Seems sketchy and unneccesary.
			// allow="geolocation; microphone; camera"
			allow="fullscreen"
			src="https://form.jotform.com/232488636953167"
			className="max-w-full min-w-full border-none h-96"
			frameBorder="0"
			scrolling="no"
		></iframe>
	);
};

export default ContactMe;

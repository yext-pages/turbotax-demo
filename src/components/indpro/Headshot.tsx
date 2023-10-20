import useIndependentPro from "../../hooks/useIndependentPro";
import { Image } from "@yext/sites-components";
import OutsideCPA from "../../assets/icons/OutsideCPA";

const Headshot: React.FC = () => {
  const pro = useIndependentPro();

  if (!pro.headshot?.url) {
    return (
      <OutsideCPA
        className={
          "w-[256px] h-[256px] s:w-[330px] s:h-[330px] p-8 border-8 border-pepper120 rounded-full bg-white self-center"
        }
      />
    );
  }

  const imgClass =
    "rounded-full max-w-[256px] max-h-[256px] s:max-w-[330px] s:max-h-[330px] self-center bg-gray08";
  if (pro.headshot.url.includes("mktgcdn.com/")) {
    return (
      <Image
        image={pro.headshot}
        layout={"fixed"}
        width={330}
        height={330}
        loading={"eager"}
        className={imgClass}
      />
    );
  }

  return (
    <img
      alt={"Headshot of " + pro.c_taxProName}
      src={pro.headshot.url}
      width={330}
      height={330}
      loading={"eager"}
      className={"object-cover " + imgClass}
    />
  );
};

export default Headshot;

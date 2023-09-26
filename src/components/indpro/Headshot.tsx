import useIndependentPro from "../../hooks/useIndependentPro";
import { Image } from "@yext/sites-components";

const Headshot: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <Image
      image={pro.headshot}
      layout={"fixed"}
      width={330}
      height={330}
      loading={"eager"}
      className={
        "rounded-full max-w-[256px] max-h-[256px] s:max-w-[330px] s:max-h-[330px] self-center bg-gray08"
      }
    />
  );
  // return <img src={pro.headshot.url} className={'w-[330px] h-[330px] rounded-full'} />
};

export default Headshot;

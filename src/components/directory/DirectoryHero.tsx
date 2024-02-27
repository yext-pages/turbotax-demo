import DirectoryHeroImage from "../../assets/images/directory_hero.svg";

interface DirectoryHeroProps {
  name: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const DirectoryHero = (props: DirectoryHeroProps) => {
  const { name, title, description, imageUrl, imageAlt } = props;
  const titleText = title || `Find a TurboTax Verified Pro in ${name == "Directory" ? "the United States" : name}`;

  return (
    <div className="flex flex-col px-4 py-6 justify-center items-center bg-blueberry10 s:px-[150px] m:flex-row m:gap-x-[100px]">
      <div className="flex flex-col gap-y-[18px] mb-6 max-w-[520px]">
        <h1 className="text-[34px] leading-[44px] m:text-[40px] m:leading-[52px] text-pepper110 font-normal">
          {titleText}
        </h1>
        <div className="text-base pepper120 font-normal">
          {description ? (
            description
          ) : (
            <span>
              Find an independent tax pro who’s got your back— they’ll only sign and file your return when it’s <strong className="font-medium">100% accurate</strong>.
            </span>
          )}
        </div>
      </div>
      <img
        className={"w-[328px] h-[342px] l:w-[447px] l:h-[466px]"}
        src={imageUrl || DirectoryHeroImage}
        loading={"eager"}
        alt={imageAlt || ""}
      />
    </div>
  );
};

export default DirectoryHero;

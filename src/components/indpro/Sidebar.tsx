import AreasOfExpertise from "./AreasOfExpertise";
import Headshot from "./Headshot";
import LanguagesSpoken from "./LanguagesSpoken";
import NameAndReviews from "./NameAndReviews";
import ServicesOffered from "./ServicesOffered";
import SkillsAndLinks from "./SkillsAndLinks";
import Tagline from "./Tagline";
import Map from "./Map";

const Sidebar: React.FC = () => {
  return (
    <div
      className={
        "flex flex-col gap-10 pt-10 s:pt-0 mx-auto s:mx-0 l:ml-12 s:translate-y-[-180px] w-full s:max-w-[330px]"
      }
    >
      <Headshot />
      <NameAndReviews />
      {/*<Tagline />*/}

      {/*
       Typically, we would conditionally render based on screen size, but in this case we want to have it in the
       static HTML, so it doesn't require the javascript bundle to load before it can render.
       */}
      <div className={"contents s:hidden"}>
        <Map />
      </div>

      <SkillsAndLinks />
      <ServicesOffered />
      <LanguagesSpoken />
      <AreasOfExpertise />
    </div>
  );
};

export default Sidebar;

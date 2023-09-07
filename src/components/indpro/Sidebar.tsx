import AreasOfExpertise from "./AreasOfExpertise";
import Headshot from "./Headshot";
import LanguagesSpoken from "./LanguagesSpoken";
import NameAndReviews from "./NameAndReviews";
import ServicesOffered from "./ServicesOffered";
import SkillsAndLinks from "./SkillsAndLinks";
import Tagline from "./Tagline";

const Sidebar: React.FC = () => {
  return (
    <div
      className={
        "flex flex-col gap-10 ml-18 translate-y-[-180px] max-w-[330px]"
      }
    >
      <Headshot />
      <NameAndReviews />
      <Tagline />
      <SkillsAndLinks />
      <ServicesOffered />
      <LanguagesSpoken />
      <AreasOfExpertise />
    </div>
  );
};

export default Sidebar;

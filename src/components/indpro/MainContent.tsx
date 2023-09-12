import AboutMe from "./AboutMe";
import HowWeWillWork from "./HowWeWillWork";
import Map from "./Map";
import IntakeForm from "./IntakeForm";

const MainContent: React.FC = () => {
  return (
    <div className="max-w-[800px] pb-8 s:py-8 flex flex-col gap-6 s:gap-12">
      <div className="flow-root overflow-hidden">
        {/*
         Typically, we would conditionally render based on screen size, but in this case we want to have it in the
         static HTML, so it doesn't require the javascript bundle to load before it can render.
         */}
        <div className={'hidden s:contents'}>
          <Map className="s:float-right s:ml-16 mb-8"/>
        </div>


        <AboutMe/>
      </div>
      {/*<HowWeWillWork />*/}
      <IntakeForm/>
    </div>
  );
};

export default MainContent;

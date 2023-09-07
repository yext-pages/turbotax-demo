import AboutMe from "./AboutMe";
import HowWeWillWork from "./HowWeWillWork";
import Map from "./Map";

const MainContent: React.FC = () => {
	return (
		<div className="max-w-[800px]">
			<div className="flow-root overflow-hidden">
				<Map className="float-right" />

				<AboutMe />
			</div>
			<HowWeWillWork />
		</div>
	);
};

export default MainContent;

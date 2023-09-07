import useIndependentPro from "../../hooks/useIndependentPro";
import { B2, H5 } from "../atoms/Typography";

const AboutMe: React.FC = () => {
	const pro = useIndependentPro();
	return (
		<div>
			<H5 className="mb-5">Great to meet you!</H5>
			<B2 className="whitespace-pre-line">{pro.aboutMe}</B2>
		</div>
	);
};

export default AboutMe;

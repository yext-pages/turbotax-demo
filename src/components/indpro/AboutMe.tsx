import useIndependentPro from "../../hooks/useIndependentPro";
import {B2, H5} from "../atoms/Typography";
import {TextColor} from "../atoms/TextColor";

const AboutMe: React.FC = () => {
	const pro = useIndependentPro();
	return (
		<div>
			<H5 weight={"demi"} color={TextColor.pepper130} className="mb-5">Great to meet you!</H5>
			<B2 color={TextColor.pepper110} className="whitespace-pre-line">{pro.c_advisorBio}</B2>
		</div>
	);
};

export default AboutMe;

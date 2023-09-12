import { B1 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";

const Tagline: React.FC = () => {
  const { tagline } = useIndependentPro();
  return <B1 color={TextColor.pepper100}>{tagline}</B1>;
};

export default Tagline;

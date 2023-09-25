import FaqItem from "./FaqItem";
import faqContent from "../../assets/content/faqContent";

const FaqList: React.FC = () => {
  return (
    <div>
      {faqContent.map((props, index) => (
        <FaqItem {...props} key={index} />
      ))}
    </div>
  );
};

export default FaqList;

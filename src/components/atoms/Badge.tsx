import { B4 } from "./Typography";
import { TextColor } from "./TextColor";

interface Props {
  variant: "success" | "warning" | "critical";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const bg: Record<Props["variant"], string> = {
  success: "bg-spearmint70",
  warning: "bg-persimmon70",
  critical: "bg-watermelon70",
};

const Badge: React.FC<Props> = ({ variant, children, className, style }) => {
  return (
    <div className={`${className} ${bg[variant]} px-1 rounded-small uppercase`} style={style}>
      <B4 weight={"demi"} color={TextColor.white}>
        {children}
      </B4>
    </div>
  );
};

export default Badge;

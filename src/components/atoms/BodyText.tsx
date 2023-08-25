import { twMerge } from "tailwind-merge";
import { ThemeColors } from "../../types/tailwind";
import { textColors } from "./HeadingText";
export interface BodyTextProps {
  text?: string;
  weight?: "Regular" | "Bold";
  className?: string;
  color?: ThemeColors;
}

export const initialProps: BodyTextProps = {
  text: "Text goes here",
  weight: "Regular",
  color: "gray-dark",
};

export default function BodyText({
  text,
  weight,
  className,
  color,
}: BodyTextProps) {
  return (
    <p
      className={twMerge(
        `text-base ${textColors[color ?? "gray-dark"]} ${
          weight === "Bold" ? "font-bold" : "font-regular"
        }`,
        className
      )}
    >
      {text ?? initialProps.text}
    </p>
  );
}

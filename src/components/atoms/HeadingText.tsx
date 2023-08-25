import { twMerge } from "tailwind-merge";
import { ThemeColors } from "../../types/tailwind";

export interface HeadingTextProps {
  text?: string;
  type?: "Heading 1" | "Heading 2" | "Heading 3";
  classname?: string;
  color?: ThemeColors;
}

export const initialProps: HeadingTextProps = {
  text: "Header",
  type: "Heading 1",
  color: "gray-dark",
};

export const textColors = {
  "gray-dark": "text-gray-dark",
  "gray-light": "text-gray-light",
  "white": "text-white",
  "black": "text-black",
  "orange": "text-orange",
  "blue": "text-blue",
  "gray-disabled": "text-gray-disabled",
  "gray-middle": "text-gray-middle",
};

export default function HeadingText({
  type,
  text,
  classname,
  color,
}: HeadingTextProps) {
  switch (type) {
    case "Heading 2":
      return (
        <h2
          className={twMerge(
            `text-2xl font-bold ${textColors[color ?? "gray-dark"]}`,
            classname
          )}
        >
          {text}
        </h2>
      );
    case "Heading 3":
      return (
        <h3
          className={twMerge(
            `text-xl font-bold ${textColors[color ?? "gray-dark"]}`,
            classname
          )}
        >
          {text}
        </h3>
      );
    default:
      return (
        <h1
          className={twMerge(
            `text-3xl font-bold ${textColors[color ?? "gray-dark"]}`,
            classname
          )}
        >
          {text}
        </h1>
      );
  }
}

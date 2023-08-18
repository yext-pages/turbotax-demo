import { Image as ImageType } from "../types/autogen";

export interface HeroProps {
  children?: React.ReactNode;
  backgroundImage?: ImageType;
}

export default function Hero({ backgroundImage, children }: HeroProps) {
  return (
    <div className="bg-gray-900 ">
      <div className="relative isolate overflow-hidden h-[482px]">
        {backgroundImage?.url && (
          <img
            src={backgroundImage.url}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 z-10 h-full w-full">
          <div className="mx-auto max-w-3xl py-32">{children}</div>
        </div>
      </div>
    </div>
  );
}

import { Image as ImageType } from "../types/autogen";

export interface HeroProps {
  children?: React.ReactNode;
  backgroundImage?: ImageType;
}

export default function Hero({ backgroundImage, children }: HeroProps) {
  return (
    <div className="bg-gray01 ">
      <div className="isolate overflow-hidden bg-blue02">
        {/*{backgroundImage?.url && (*/}
        {/*  <img*/}
        {/*    src={backgroundImage.url}*/}
        {/*    alt=""*/}
        {/*    className="absolute inset-0 -z-10 h-full w-full object-cover"*/}
        {/*  />*/}
        {/*)}*/}
        <div className="h-full w-full">
          <div className="mx-auto max-w-3xl px-5 py-16 s:py-[128px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

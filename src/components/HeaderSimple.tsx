import { Disclosure } from "@headlessui/react";
import { HexColor } from "@yext/studio";
import {
  ComplexImage as ComplexImageType,
  Image as ImageType,
} from "../types/autogen";
import { Image } from "@yext/sites-components";

export interface HeaderSimpleProps {
  logo?: ComplexImageType | ImageType;
  backgroundColor?: HexColor;
}

const HeaderSimple = (props: HeaderSimpleProps) => {
  const { logo, backgroundColor } = props;

  return (
    <>
      <Disclosure as="nav" className="shadow" style={{ backgroundColor }}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 justify-between">
                <div className="flex">
                  {logo && (
                    <Image image={logo} layout="fixed" height={80} width={80} />
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default HeaderSimple;

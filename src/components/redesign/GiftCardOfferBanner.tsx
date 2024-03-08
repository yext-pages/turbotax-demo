import React, { FC } from 'react';
import Link from "../atoms/Link";
import { TypeScale } from "../atoms/TypeScale";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import useIndependentPro from "../../hooks/useIndependentPro";

const GiftCardOfferBanner: FC = () => {
  const pro = useIndependentPro();

  return (
    <div className={"bg-watermelon50"}>
      <div className={"flex justify-center items-center flex-row gap-4 px-2"}>
        <div className={"w-16 hidden min-[375px]:block py-2"}>
          <img
               src={pro.c_epsImageUrl || pro.headshot?.url}
               alt={pro.c_taxProName}
               height={64}
               width={"auto"}
               className={"border-solid border-pepper100 border-1 rounded-full object-contain max-w-full max-h-full"}
          />
        </div>
        <div className={"text-gray-700 flex flex-col justify-center items-start"}>
          <div className={"text-2xl font-extrabold leading-7 md:text-6xl md:leading-14"}>
            <ResponsiveTypography
              typescaleMobile={TypeScale.Headline04}
              typescaleStationary={TypeScale.Headline02}
              weightMobile={"heavy"}
              weightStationary={"heavy"}
              as={"div"}
            >
              File with me, Get $100
            </ResponsiveTypography>
          </div>
          <div className={"flex justify-center items-center flex-row gap-2"}>
              <ResponsiveTypography
                typescaleMobile={TypeScale.Body04}
                typescaleStationary={TypeScale.Body01}
                weightMobile={"heavy"}
                weightStationary={"heavy"}
                as={"div"}
              >
                as a gift card, must file by 3/31
              </ResponsiveTypography>
            <Link action={"engaged"}
                  object={"link"}
                  href={"https://promos.mardenkane.com/intuit/intuitincentive/"}
                  objectDetail={"gift card terms link"}
                  className={"text-blue02 font-semibold hover:underline"}>
              see terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GiftCardOfferBanner
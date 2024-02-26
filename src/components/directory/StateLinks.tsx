import { useState, useEffect } from "react";
import { DirectoryProfile } from "../../types/entities";
import DirectoryList from "./DirectoryList";

export type RegionEntitiesResponse = {
  count: number;
  docs: DirectoryProfile<never>[];
};

interface StateLinksProps {
  baseUrl: string;
};

const StateLinks = (props: StateLinksProps) => {
  const { baseUrl } = props;
  const title = "Find a TurboTax Verified Pro in Another State";

  const [regionEntities, setRegionEntities] = useState<RegionEntitiesResponse>();  
  const streamsApiKey = "5606fbbd0d232b9a2a1a81a6e489255b";
  useEffect(() => {
    fetch(
      `https://streams.yext.com/v2/accounts/me/api/directoryRegionEntities?v=20240222&api_key=${streamsApiKey}&limit=50`
    )
      .then((resp) => resp.json())
      .then((data) => setRegionEntities(data.response || {}))
      .catch((error) => console.log(error));
  }, [streamsApiKey]);

  return regionEntities ? (
    <div className="flex flex-col bg-pepper0">
      <div className="font-normal text-pepper110 text-[20px] leading-[28px] pb-[16px] s:text-[24px] s:leading-[30px] s:pb-[32px]">
        {title}
      </div>
      <div className="">
        <DirectoryList
          directoryChildren={regionEntities.docs}
          relativePrefixToRoot={baseUrl}
          isFooter={true}
        />
      </div>
    </div>
  ) : (
    <div className="Statelinks hidden" />
  );
};

export default StateLinks;

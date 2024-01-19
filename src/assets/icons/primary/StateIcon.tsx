import AL from "./states/alabama.svg";
import AK from "./states/alaska.svg";
import AZ from "./states/arizona.svg";
import AR from "./states/arkansas.svg";
import CA from "./states/california.svg";
import CO from "./states/colorado.svg";
import CT from "./states/connecticut.svg";
import DC from "./states/district-of-columbia.svg";
import DE from "./states/delaware.svg";
import FL from "./states/florida.svg";
import GA from "./states/georgia.svg";
import HI from "./states/hawaii.svg";
import ID from "./states/idaho.svg";
import IL from "./states/illinois.svg";
import IN from "./states/indiana.svg";
import IA from "./states/iowa.svg";
import KS from "./states/kansas.svg";
import KY from "./states/kentucky.svg";
import LA from "./states/louisiana.svg";
import ME from "./states/maine.svg";
import MD from "./states/maryland.svg";
import MA from "./states/massachusetts.svg";
import MI from "./states/michigan.svg";
import MN from "./states/minnesota.svg";
import MS from "./states/mississippi.svg";
import MO from "./states/missouri.svg";
import MT from "./states/montana.svg";
import NE from "./states/nebraska.svg";
import NV from "./states/nevada.svg";
import NH from "./states/new-hampshire.svg";
import NJ from "./states/new-jersey.svg";
import NM from "./states/new-mexico.svg";
import NY from "./states/new-york.svg";
import NC from "./states/north-carolina.svg";
import ND from "./states/north-dakota.svg";
import OH from "./states/ohio.svg";
import OK from "./states/oklahoma.svg";
import OR from "./states/oregon.svg";
import PA from "./states/pennsylvania.svg";
import RI from "./states/rhode-island.svg";
import SC from "./states/south-carolina.svg";
import SD from "./states/south-dakota.svg";
import TN from "./states/tennessee.svg";
import TX from "./states/texas.svg";
import UT from "./states/utah.svg";
import VT from "./states/vermont.svg";
import VA from "./states/virginia.svg";
import WA from "./states/washington.svg";
import WV from "./states/west-virginia.svg";
import WI from "./states/wisconsin.svg";
import WY from "./states/wyoming.svg";
import US from "./states/US.svg";

type USState =
  | "AL"
  | "AK"
  | "AZ"
  | "AR"
  | "CA"
  | "CO"
  | "CT"
  | "DC"
  | "DE"
  | "FL"
  | "GA"
  | "HI"
  | "ID"
  | "IL"
  | "IN"
  | "IA"
  | "KS"
  | "KY"
  | "LA"
  | "ME"
  | "MD"
  | "MA"
  | "MI"
  | "MN"
  | "MS"
  | "MO"
  | "MT"
  | "NE"
  | "NV"
  | "NH"
  | "NJ"
  | "NM"
  | "NY"
  | "NC"
  | "ND"
  | "OH"
  | "OK"
  | "OR"
  | "PA"
  | "RI"
  | "SC"
  | "SD"
  | "TN"
  | "TX"
  | "UT"
  | "VT"
  | "VA"
  | "WA"
  | "WV"
  | "WI"
  | "WY";

const StateMappings: Record<USState, string> = {
  AL: AL,
  AK: AK,
  AZ: AZ,
  AR: AR,
  CA: CA,
  CO: CO,
  CT: CT,
  DC: DC,
  DE: DE,
  FL: FL,
  GA: GA,
  HI: HI,
  ID: ID,
  IL: IL,
  IN: IN,
  IA: IA,
  KS: KS,
  KY: KY,
  LA: LA,
  ME: ME,
  MD: MD,
  MA: MA,
  MI: MI,
  MN: MN,
  MS: MS,
  MO: MO,
  MT: MT,
  NE: NE,
  NV: NV,
  NH: NH,
  NJ: NJ,
  NM: NM,
  NY: NY,
  NC: NC,
  ND: ND,
  OH: OH,
  OK: OK,
  OR: OR,
  PA: PA,
  RI: RI,
  SC: SC,
  SD: SD,
  TN: TN,
  TX: TX,
  UT: UT,
  VT: VT,
  VA: VA,
  WA: WA,
  WV: WV,
  WI: WI,
  WY: WY,
};

export function getStateIcon(state: string): string {
  if (StateMappings[state as USState]) return StateMappings[state as USState];
  return US;
}

interface Props {
  state: string | undefined;
}

export const StateIcon: React.FC<Props> = (props) => {
  return (
    <img
      src={getStateIcon(props.state || "US")}
      width={60}
      height={60}
      // the funky &_path makes the icons solid
      className={"w-6 h-6 s:w-8 s:h-8 [&_path]:fill-pepper120"}
    />
  );
};

import React, { useContext } from "react";
import type TaxProsDev from "../types/autogen";

export type TaxProsDevExtended = Omit<
  TaxProsDev,
  "c_signedMapUrlPreProd" | "c_signedMapUrlProd"
> & {
  c_signedMapUrlPreProd?: string;
  c_signedMapUrlProd?: string;
  c_signedMapUrl?: string;
};

export const IndependentProContext = React.createContext({} as TaxProsDevExtended);

const useIndependentPro = (): TaxProsDevExtended => {
  return useContext(IndependentProContext);
};

export default useIndependentPro;

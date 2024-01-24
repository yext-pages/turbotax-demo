import React, { useContext } from "react";
import type { TaxProsMain } from "../types/autogen";

export type TaxProsDevExtended = Omit<
  TaxProsMain,
  "c_signedMapUrlPreProd" | "c_signedMapUrlProd"
> & {
  c_signedMapUrlPreProd?: string;
  c_signedMapUrlProd?: string;
  c_signedMapUrl?: string;
  reviewGenerationUrl?: string;
};

export const IndependentProContext = React.createContext({} as TaxProsDevExtended);

const useIndependentPro = (): TaxProsDevExtended => {
  return useContext(IndependentProContext);
};

export default useIndependentPro;

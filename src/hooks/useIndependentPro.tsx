import React, { useContext } from "react";

export interface IndependentPro {
	fullName: string;
	businessName: string;
	tagline: string;
	yearsOfExperience: number;
	businessAddress: {
		addressLine1: string;
		addressLine2?: string;
		city: string;
		state: string;
		zipCode: string;
	};
	// geoCoordinates: [number, number];
	links: Partial<Record<"website" | "linkedin", string>>;
	taxSpecialty: "business" | "individual";
	servicesOffered: string[];
	languagesSpoken: string[];
	areasOfExpertise: string[];
	aboutMe: string;
	howWeWillWork: string;
	profileHeadshotUrl: string;
	additionalPhotosUrls: string[];
}

export const IndependentProContext = React.createContext({} as IndependentPro);

const useIndependentPro = (): IndependentPro => {
	return useContext(IndependentProContext);
};

export default useIndependentPro;

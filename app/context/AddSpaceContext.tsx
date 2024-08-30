import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BasicInfo {
  name: string;
  address: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
  businessLicense: string;
  about: string;
  licenseImg: string | null;
}

export interface Pricing {
  pricingType: string;
  price: string;
  pricePerDay: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
}

export interface SpaceDetails {
  workspace: string[];
  speciality: string[];
  amenities: string[];
  rentalType: string;
  workstationNumber: number;
  coverImg: string | null;
  salonImages: string[];
  rules: string;
  policy: string;
}

export interface AvailabilityDetails {
  duration: string;
  days: string[];
  hours: {
    open: string;
    close: string;
  };
}

interface AddSpaceContextType {
  badges: string[];
  setBadges: React.Dispatch<React.SetStateAction<string[]>>;
  pricing: Pricing;
  setPricing: React.Dispatch<React.SetStateAction<Pricing>>;
  availability: AvailabilityDetails;
  setAvailability: React.Dispatch<React.SetStateAction<AvailabilityDetails>>;
  spaceDetails: SpaceDetails;
  setSpaceDetails: React.Dispatch<React.SetStateAction<SpaceDetails>>;
  basicInfo: BasicInfo;
  setBasicInfo: React.Dispatch<React.SetStateAction<BasicInfo>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const AddSpaceContext = createContext<AddSpaceContextType | undefined>(
  undefined,
);

export const useAddSpaceContext = () => {
  const context = useContext(AddSpaceContext);
  if (!context) {
    throw new Error(
      'useAddSpaceContext must be used within a AddSpaceProvider',
    );
  }
  return context;
};

export const AddSpaceProvider = ({ children }: { children: ReactNode }) => {
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    name: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    businessLicense: '',
    about: '',
    licenseImg: null,
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [pricing, setPricing] = useState<Pricing>({
    pricingType: '',
    price: '',
    pricePerDay: {
      mon: '',
      tue: '',
      wed: '',
      thu: '',
      fri: '',
      sat: '',
      sun: '',
    },
  });

  const [badges, setBadges] = useState<string[]>([]);

  const [spaceDetails, setSpaceDetails] = useState<SpaceDetails>({
    workspace: [],
    speciality: [],
    amenities: [],
    rentalType: '',
    workstationNumber: 1,
    coverImg: null,
    salonImages: [],
    rules: '',
    policy: '',
  });

  const [availability, setAvailability] = useState<AvailabilityDetails>({
    duration: '',
    days: [],
    hours: {
      open: '',
      close: '',
    },
  });

  return (
    <AddSpaceContext.Provider
      value={{
        badges,
        setBadges,
        pricing,
        setPricing,
        availability,
        setAvailability,
        spaceDetails,
        setSpaceDetails,
        basicInfo,
        setBasicInfo,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </AddSpaceContext.Provider>
  );
};

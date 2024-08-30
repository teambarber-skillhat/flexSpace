import {
  BasicInfo,
  Pricing,
  SpaceDetails,
  AvailabilityDetails,
} from '../context/AddSpaceContext';

interface DisabledParams {
  currentStep: number;
  basicInfo: BasicInfo;
  spaceDetails: SpaceDetails;
  pricing: Pricing;
}

interface SetTimeDisabledParams {
  currentStep: number;
  availability: AvailabilityDetails;
  isOpen: boolean;
}

export const isDisabled = ({
  currentStep,
  basicInfo,
  spaceDetails,
  pricing,
}: DisabledParams): boolean => {
  switch (currentStep) {
    case 1:
      return (basicInfo?.name?.length ?? 0) < 3;
    case 2:
      return (
        !basicInfo?.address ||
        !basicInfo?.apt ||
        !basicInfo?.city ||
        !basicInfo?.state ||
        !basicInfo?.zip
      );
    case 3:
      return !basicInfo?.businessLicense || !basicInfo?.about;
    case 4:
      return (spaceDetails?.workspace?.length ?? 0) === 0;
    case 5:
      return (spaceDetails?.amenities?.length ?? 0) === 0;
    case 6:
      return !spaceDetails?.rentalType;
    case 7:
      return (
        !spaceDetails?.coverImg ||
        (spaceDetails?.salonImages?.length ?? 0) === 0
      );
    case 8:
      return !spaceDetails?.rules && !spaceDetails?.policy;
    case 10:
      return (
        !pricing?.pricingType &&
        (!pricing?.price ||
          !Object.values(pricing?.pricePerDay ?? {}).some(
            (value) => Boolean(value) !== false,
          ))
      );
    default:
      return false;
  }
};

export const isSetTimeDisabled = ({
  currentStep,
  availability,
  isOpen,
}: SetTimeDisabledParams): boolean => {
  if (currentStep === 9) {
    return !availability?.duration || (availability?.days?.length ?? 0) === 0;
  } else if (isOpen) {
    return !availability?.hours?.open || !availability?.hours?.close;
  }
  return false;
};

export const getPath = (step: number): string => {
  switch (true) {
    case step >= 1 && step <= 3:
      return 'basic-info';
    case step >= 4 && step <= 8:
      return 'space-details';
    case step === 9:
      return 'availability';
    case step === 10:
      return 'pricing';
    case step === 11:
      return 'badges';
    case step === 12:
      return 'preview';
    default:
      return '/';
  }
};

export const getLabel = (step: number): string => {
  switch (true) {
    case step >= 1 && step <= 3:
      return 'Basic Information';
    case step >= 4 && step <= 9:
      return 'Space Details';
    case step === 9:
      return 'Availability';
    case step === 10:
      return 'Pricing';
    case step === 11:
      return 'Badges';
    case step === 12:
      return 'Preview';
    default:
      return 'Unknown Step';
  }
};

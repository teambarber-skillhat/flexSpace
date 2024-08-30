'use client';
import Button from '@/app/components/Button';
import { useRouter, usePathname } from 'next/navigation';
import ProgressBar from '@/app/components/ProgressBar';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';
import Modal from '@/app/components/SetTimeModal';
import { useState } from 'react';
import AvailabilityTimePicker from '@/app/components/AvailabilityTimePicker';
import toast from 'react-hot-toast';
import {
  isDisabled,
  isSetTimeDisabled,
  getLabel,
  getPath,
} from '@/app/helpers/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const totalSteps = 12;
  const [isOpen, setIsOpen] = useState(false);

  const {
    currentStep,
    setCurrentStep,
    availability,
    basicInfo,
    pricing,
    spaceDetails,
  } = useAddSpaceContext();

  const space = {
    name: basicInfo?.name,
    address: basicInfo?.address,
    cover: spaceDetails?.coverImg,
    price:
      pricing?.price ||
      Object.values(pricing?.pricePerDay).map((price) => price !== '0'),
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      router.push(`/add-space/${getPath(currentStep + 1)}`);
    }

    if (currentStep === totalSteps) {
      toast.success(
        'Your listing has been submitted! Our team is reviewing it and will have it live within the next 24 hours.',
        {
          duration: 3000,
        },
      );
      localStorage.setItem('space', JSON.stringify(space));
      router.push(`/explore`);
    }
  };

  const handleSetTime = () => {
    setIsOpen(!isOpen);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      router.push(`/add-space/${getPath(currentStep - 1)}`);
    } else {
      router.back();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center p-6">
        <div className="fixed top-0 w-full bg-mainLightColor">
          <div className="flex justify-center border-b border-[#E9E9E9] px-6 py-4">
            <button className="absolute left-6" onClick={handleBack}>
              <svg width={24} height={24}>
                <use href="/sprite-app.svg#icon-arrow" />
              </svg>
            </button>
            <p className="font-bold text-mainDarkColor">
              {getLabel(currentStep)}
            </p>
            <button
              className="absolute right-6 text-sm text-accentColor underline"
              onClick={() => router.back()}
            >
              Save & exit
            </button>
          </div>
          <div className="p-6">
            <ProgressBar max={100} value={(100 / totalSteps) * currentStep} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full bg-gray p-6">
        {!pathname.includes('/availability') || availability.hours.open ? (
          <Button
            primary={true}
            full={true}
            onClick={handleNext}
            disabled={isDisabled({
              currentStep,
              basicInfo,
              spaceDetails,
              pricing,
            })}
          >
            Next
          </Button>
        ) : (
          <Button
            primary={true}
            full={true}
            onClick={handleSetTime}
            disabled={isSetTimeDisabled({ currentStep, availability, isOpen })}
          >
            Set Time
          </Button>
        )}
      </div>

      <div className="px-6 pt-24">{children}</div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          title="Set Time"
          onClose={setIsOpen}
          disabled={isSetTimeDisabled({ currentStep, availability, isOpen })}
        >
          <h2 className="mb-4 text-base font-bold">
            Set your opening and closing time
          </h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Define the hours your space is available each day, so professionals
            know when they can book.
          </p>
          <AvailabilityTimePicker />
        </Modal>
      )}
    </div>
  );
}

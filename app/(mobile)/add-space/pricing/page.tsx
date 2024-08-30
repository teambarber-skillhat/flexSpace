'use client';
import React, { ChangeEvent, useState, useEffect } from 'react';
import InputField from '@/app/components/InputField';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';
import Modal from '@/app/components/SetPriceModal';
import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const router = useRouter();
  const { currentStep, pricing, setPricing, basicInfo } = useAddSpaceContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!basicInfo.name || !basicInfo.address) {
      router.push('/add-space/basic-info');
    }
  }, [basicInfo.address, basicInfo.name, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPricing((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  const handlePricePerDayChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, value } = event.target;

    setPricing((prevState) => ({
      ...prevState,
      pricePerDay: {
        ...prevState.pricePerDay,
        [id]: value,
      },
    }));
  };

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPricing((prevState) => ({
      ...prevState,
      pricingType: e.target.value,
    }));
  };

  return (
    <div>
      {currentStep === 10 && (
        <div>
          <h2 className="mb-4 text-base font-bold">
            Set pricing for your space
          </h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Set your price by choosing either hourly rate or daily rate.
          </p>

          <div>
            <fieldset className="mt-4 flex flex-col gap-4">
              <label className="mb-4 w-full">
                <div className="mb-1 flex justify-between">
                  <p className="text-sm font-medium text-[#838383]">Hourly</p>
                  <input
                    type="radio"
                    name="pricing-type"
                    value="hourly"
                    className="mr-2 w-4"
                    onChange={handleTypeChange}
                    checked={pricing.pricingType === 'hourly'}
                  />
                </div>
              </label>

              {pricing.pricingType === 'hourly' && (
                <InputField
                  label="Set Price (Hourly)"
                  type="text"
                  id="hourly"
                  placeholder="Set Price"
                  value={pricing.price}
                  onChange={handleChange}
                />
              )}

              <label className="mb-4 w-full">
                <div className="mb-1 flex justify-between">
                  <p className="text-sm font-medium text-[#838383]">Daily</p>
                  <input
                    type="radio"
                    name="pricing-type"
                    value="daily"
                    className="mr-2 w-4"
                    onChange={handleTypeChange}
                    checked={pricing.pricingType === 'daily'}
                  />
                </div>
              </label>

              {pricing.pricingType === 'daily' &&
                !Object.values(pricing?.pricePerDay).some(
                  (val) => Boolean(val) !== false,
                ) && (
                  <InputField
                    label="Set Price (Daily)"
                    type="text"
                    id="daily"
                    placeholder="Set Price"
                    value={pricing.price}
                    onChange={handleChange}
                  />
                )}

              {pricing.pricingType === 'daily' && (
                <div className="items-start">
                  <p className="mb-4 text-sm font-medium text-[#838383]">
                    Set a fixed rate for each day or price each diffrently.
                  </p>
                  <button
                    className="text-sm font-medium text-accentColor underline"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Price each day differently
                  </button>
                </div>
              )}

              {Object.values(pricing?.pricePerDay).some(
                (val) => Boolean(val) !== false,
              ) && (
                <div className="bg-[#32BA7726] p-3">
                  <p className="text-sm font-medium text-[#09713D]">
                    Each day has been set differently and you can always change
                    this later.
                  </p>
                </div>
              )}
            </fieldset>
          </div>
        </div>
      )}

      <Modal isOpen={isOpen} title="Set Price Per Day" onClose={setIsOpen}>
        <InputField
          label="Monday"
          type="text"
          id="mon"
          placeholder="Set Price"
          value={pricing.pricePerDay.mon}
          onChange={handlePricePerDayChange}
        />
        <InputField
          label="Tuesday"
          type="text"
          id="tue"
          placeholder="Set Price"
          value={pricing.pricePerDay.tue}
          onChange={handlePricePerDayChange}
        />
        <InputField
          label="Wednesday"
          type="text"
          id="wed"
          placeholder="Set Price"
          value={pricing.pricePerDay.wed}
          onChange={handlePricePerDayChange}
        />
        <InputField
          label="Thursday"
          type="text"
          id="thu"
          placeholder="Set Price"
          value={pricing.pricePerDay.thu}
          onChange={handlePricePerDayChange}
        />
        <InputField
          label="Friday"
          type="text"
          id="fri"
          placeholder="Set Price"
          value={pricing.pricePerDay.fri}
          onChange={handlePricePerDayChange}
        />
        <InputField
          label="Saturday"
          type="text"
          id="sat"
          placeholder="Set Price"
          value={pricing.pricePerDay.sat}
          onChange={handlePricePerDayChange}
        />
        <InputField
          label="Sunday"
          type="text"
          id="sun"
          placeholder="Set Price"
          value={pricing.pricePerDay.sun}
          onChange={handlePricePerDayChange}
        />
      </Modal>
    </div>
  );
}

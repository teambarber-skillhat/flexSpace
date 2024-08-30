'use client';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';
import WeekDaysCheckboxes from '@/app/components/WeekdaysCheckboxes';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function Availability() {
  const router = useRouter();
  const { currentStep, availability, setAvailability, basicInfo } =
    useAddSpaceContext();
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!basicInfo.name || !basicInfo.address) {
      router.push('/add-space/basic-info');
    }
  }, [basicInfo.address, basicInfo.name, router]);

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAvailability((prevState) => ({
      ...prevState,
      duration: e.target.value,
    }));
  };

  return (
    <div>
      {currentStep === 9 && (
        <div>
          <h2 className="mb-4 text-base font-bold">Choose Your Rental Terms</h2>
          <p className="mb-4 text-sm font-medium text-[#838383]">
            Opt for pre-set durations (30, 60, or 90 days) or customize your
            lease period to fit your availability.
          </p>

          <div className="mb-5">
            <div className="flex rounded bg-gray p-1">
              <button
                className={clsx(
                  activeIdx === 0
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => setActiveIdx(0)}
              >
                Pre-Set Options
              </button>
              <button
                className={clsx(
                  activeIdx === 1
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => setActiveIdx(1)}
              >
                Custom
              </button>
            </div>
          </div>

          {activeIdx === 0 && (
            <div>
              <p className="text-xs font-semibold text-[#838383]">
                Set your availability once, and it will automatically display in
                the app for the next 30, 60, or 90 days.
              </p>

              <fieldset className="mt-4 flex flex-col gap-4">
                <label className="mb-4 w-full">
                  <div className="mb-1 flex justify-between">
                    <p className="text-sm font-medium text-[#838383]">
                      30-day lease
                    </p>
                    <input
                      type="radio"
                      name="lease-type"
                      value="30-day"
                      className="mr-2 w-4"
                      onChange={handleTypeChange}
                      checked={availability.duration === '30-day'}
                    />
                  </div>
                </label>
                {availability.duration === '30-day' && <WeekDaysCheckboxes />}

                <label className="mb-4 w-full">
                  <div className="mb-1 flex justify-between">
                    <p className="text-sm font-medium text-[#838383]">
                      60-day lease
                    </p>
                    <input
                      type="radio"
                      name="lease-type"
                      value="60-day"
                      className="mr-2 w-4"
                      onChange={handleTypeChange}
                      checked={availability.duration === '60-day'}
                    />
                  </div>
                </label>

                {availability.duration === '60-day' && <WeekDaysCheckboxes />}

                <label className="mb-4 w-full">
                  <div className="mb-1 flex justify-between">
                    <p className="text-sm font-medium text-[#838383]">
                      90-day lease
                    </p>
                    <input
                      type="radio"
                      name="lease-type"
                      value="90-day"
                      className="mr-2 w-4"
                      onChange={handleTypeChange}
                      checked={availability.duration === '90-day'}
                    />
                  </div>
                </label>

                {availability.duration === '90-day' && <WeekDaysCheckboxes />}

                {availability.hours.open && (
                  <div className="bg-[#32BA7726] p-3">
                    <p className="text-sm font-medium text-[#09713D]">
                      Opening and closing time has been set
                    </p>
                  </div>
                )}
              </fieldset>
            </div>
          )}

          {activeIdx === 1 && <div>Calendar</div>}
        </div>
      )}
    </div>
  );
}

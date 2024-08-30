'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import Calendar from '@/app/components/Calendar';
import { useRouter } from 'next/navigation';
import MobileModal from '@/app/components/MobileModal';
import TimePicker from '@/app/components/TimePicker';
import { weekDays } from '@/app/api/mockdata';
import { useBookingContext } from '@/app/context/BookingContext';

const prices = {
  1: 12,
  2: 16,
  3: 35,
  4: 45,
  5: 50,
  6: 60,
  7: 70,
  8: 80,
  24: 10,
  25: 20,
  26: 30,
  27: 70,
  28: 150,
  29: 55,
  30: 60,
  31: 70,
};

const availableDates = {
  0: new Set([24, 25, 26, 27, 28, 29, 30, 31]),
  1: new Set([1, 2, 3, 4, 5, 6, 7, 8]),
};

export default function SelectDate() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { dateDetails, price, timeDetails } = useBookingContext();

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="fixed bottom-0 h-full w-full bg-mainLightColor">
          <div className="flex justify-center border-b border-[#E9E9E9] px-6 py-4">
            <button className="absolute left-6" onClick={() => router.back()}>
              <svg width={24} height={24}>
                <use href="/sprite-app.svg#icon-arrow" />
              </svg>
            </button>
            <p className="font-bold text-mainDarkColor">Select Date</p>
          </div>
          <div className="p-6">
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
                Hourly
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
                Daily
              </button>
            </div>
          </div>
          <div className="custom-scrollbar h-[80%] overflow-y-auto p-6">
            <Calendar
              prices={prices}
              availableDates={availableDates}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <MobileModal
          isOpen={isOpen}
          title="Select Time"
          price={price.toString()}
          btnText={
            !timeDetails.checkIn && !timeDetails.checkOut
              ? 'Select Time'
              : 'Continue to checkout'
          }
          disabled={!timeDetails.checkIn || !timeDetails.checkOut}
          onClose={setIsOpen}
        >
          <div className="border-b border-gray">
            <div className="mb-4">
              <p className="mb-2 text-base font-bold leading-6 tracking-[-0.3px] text-titleColor">
                Set Time
              </p>
              <p className="text-xs font-medium tracking-[-0.2px] text-[#838383]">
                Set your check-in and check-out time.
              </p>
            </div>
            <div>
              <p className="mb-2 text-base font-bold leading-6 tracking-[-0.3px] text-titleColor">
                {dateDetails.month} {dateDetails.day}, {dateDetails.year}
              </p>
              <p className="text-xs font-medium tracking-[-0.2px] text-[#838383]">
                Minimum of two hours must be booked.
              </p>
            </div>
            <div className="mb-6">
              <TimePicker />
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-base font-bold leading-6 tracking-[-0.3px] text-titleColor">
              Available Rental Hours
            </p>
            <p className="mb-4 text-end text-xs font-medium text-[#585858]">
              Dates and times are in est
            </p>
            <ul className="flex flex-col gap-4">
              {weekDays.map(({ day, hours }) => (
                <li key={day} className="flex justify-between">
                  <span className="text-sm font-medium text-[#AEAEB2]">
                    {day}
                  </span>
                  <span className="text-sm font-medium text-headerColor">
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </MobileModal>
      )}
    </>
  );
}

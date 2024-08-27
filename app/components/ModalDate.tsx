import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import clsx from 'clsx';
import Calendar from './Calendar';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

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

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={clsx('fixed inset-0 z-50 flex items-center justify-center', {
        hidden: !isOpen,
      })}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose(!isOpen);
        }
      }}
    >
      <div className="fixed bottom-0 h-full w-full bg-mainLightColor">
        <div className="flex justify-center border-b border-[#E9E9E9] px-6 py-4">
          <button className="absolute left-6" onClick={() => onClose(!isOpen)}>
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
          <Calendar prices={prices} availableDates={availableDates} />
        </div>
      </div>
    </div>
  );
}

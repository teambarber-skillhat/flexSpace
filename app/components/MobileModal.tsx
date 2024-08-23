import React, { Dispatch, SetStateAction, useEffect } from 'react';
import clsx from 'clsx';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
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
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-mainDarkColor bg-opacity-50',
        {
          hidden: !isOpen,
        },
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose(!isOpen);
        }
      }}
    >
      <div className="fixed bottom-0 w-full rounded-t-3xl bg-mainLightColor shadow-lg md:max-w-md">
        <div className="relative flex justify-center border-b border-[#E9E9E9] px-6 py-4">
          <button className="absolute left-6" onClick={() => onClose(!isOpen)}>
            <svg width={24} height={24}>
              <use href="/sprite-app.svg#icon-arrow" />
            </svg>
          </button>
          <p className="font-bold text-accentColor">Filters</p>
        </div>
        <div className="custom-scrollbar h-[75vh] overflow-y-auto p-6">
          {children}
        </div>
        <div className="flex justify-between border-t border-[#E9E9E9] bg-[#E9E9E9] p-6">
          <button>Clear all</button>
          <Button primary={true} onClick={() => onClose(!isOpen)}>
            Show All
          </Button>
        </div>
      </div>
    </div>
  );
}

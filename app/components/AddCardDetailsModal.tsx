import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import AddCardForm from './AddCardForm';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function AddCardDetailsModal({ isOpen, onClose }: ModalProps) {
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
          <p className="font-bold text-accentColor">Add Card Details</p>
        </div>

        <div className="custom-scrollbar h-[85vh] overflow-y-auto p-6">
          <AddCardForm  onClose={onClose}/>
        </div>
      </div>
    </div>
  );
}

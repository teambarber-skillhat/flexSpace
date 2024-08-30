import React, { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import AddCardDetailsModal from './AddCardDetailsModal';
import { useBookingContext } from '../context/BookingContext';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const { cardDetails, setApplePay, setCardDetails } = useBookingContext();

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
          <p className="font-bold text-accentColor">
            Select Your Payment Method
          </p>
        </div>

        <div className="custom-scrollbar h-[50vh] overflow-y-auto p-6">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div
              className="group cursor-pointer"
              onClick={() => setIsAddCardOpen(!isAddCardOpen)}
            >
              <div className="rounded-2xl border border-transparent bg-[#F2F2F2] px-16 py-12 group-hover:border group-hover:border-gray">
                <Image
                  src="/add.svg"
                  height={32}
                  alt="add card"
                  width={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="mt-2 text-[#838383] group-hover:text-accentColor">
                Add Card
              </p>
            </div>

            <div
              className="group cursor-pointer"
              onClick={() => {
                setApplePay(true);
                onClose(false);
                setCardDetails({
                  cardNumber: '',
                  expiry: '',
                  cvv: '',
                  cardName: '',
                  address: '',
                  apt: '',
                  city: '',
                  state: '',
                  zip: '',
                });
              }}
            >
              <div className="rounded-2xl border border-transparent bg-[#F2F2F2] px-16 py-12 group-hover:border group-hover:border-gray">
                <Image
                  src="/apple-pay.svg"
                  height={32}
                  alt="apple pay"
                  width={32}
                  className="h-8 w-8"
                />
              </div>
              <p className="mt-2 text-[#838383] group-hover:text-accentColor">
                Apple Pay
              </p>
            </div>
          </div>

          <div className="flex">
            {cardDetails.cardNumber && (
              <div
                className="group cursor-pointer pl-4"
                onClick={() => onClose(false)}
              >
                <div className="rounded-2xl border border-transparent bg-[#F2F2F2] px-16 py-12 group-hover:border group-hover:border-gray">
                  <Image
                    src="/visa.svg"
                    height={32}
                    alt="visa"
                    width={32}
                    className="h-8 w-8"
                  />
                </div>
                <p className="mt-2 text-[#838383] group-hover:text-accentColor">
                  ****{' '}
                  {cardDetails.cardNumber.slice(
                    cardDetails.cardNumber.length - 5,
                    cardDetails.cardNumber.length - 1,
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <AddCardDetailsModal isOpen={isAddCardOpen} onClose={setIsAddCardOpen} />
    </div>
  );
}

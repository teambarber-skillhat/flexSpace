'use client';
import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import Button from './Button';
import { useRouter, useParams } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  price?: string;
  btnText?: string;
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  price,
  btnText,
  title,
  disabled,
  children,
}: ModalProps) {
  const router = useRouter();
  const { name } = useParams();

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
          <p className="font-bold text-accentColor">{title}</p>
        </div>
        <div className="custom-scrollbar h-[75vh] overflow-y-auto p-6">
          {children}
        </div>
        <div className="flex justify-between border-t border-[#E9E9E9] bg-[#E9E9E9] p-6">
          {price ? (
            <div>
              <p className="text-headerColor">
                from{' '}
                <span className="text-xl font-bold text-headerColor">
                  ${price}/hr
                </span>
              </p>
              <p className="text-[#585858]">Chair-Rental</p>
            </div>
          ) : (
            <button className="underline">Clear all</button>
          )}
          <Button
            primary={true}
            onClick={() => {
              if (title === 'Select Time') {
                router.push(`/booking/${name}/confirmation`);
              } else {
                onClose(!isOpen);
              }
            }}
            disabled={disabled}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
}

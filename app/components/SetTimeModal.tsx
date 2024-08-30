'use client';
import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import Button from './Button';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  disabled,
  children,
}: ModalProps) {
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
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </button>
          <p className="font-bold text-accentColor">{title}</p>
        </div>
        <div className="custom-scrollbar h-[40vh] overflow-y-auto p-6">
          {children}
        </div>
        <div className="flex justify-between border-t border-[#E9E9E9] bg-[#E9E9E9] p-6">
          <Button
            primary={true}
            onClick={() => {
              onClose(!isOpen);
            }}
            disabled={disabled}
            full={true}
          >
            Set Time
          </Button>
        </div>
      </div>
    </div>
  );
}

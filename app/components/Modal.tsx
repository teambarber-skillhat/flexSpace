import React, { useEffect } from 'react';
import clsx from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
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
    >
      <div className="relative m-6 w-full max-w-sm rounded-lg bg-mainLightColor p-6 shadow-lg md:max-w-md">
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-2xl text-mainDarkColor"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

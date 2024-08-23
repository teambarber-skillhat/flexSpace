'use client';
import React, { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  full?: boolean;
}

export default function Button({
  children,
  primary,
  full,
  ...rest
}: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...rest}
      className={clsx(
        primary
          ? 'bg-accentColor hover:bg-buttonBg'
          : 'bg-buttonBg hover:bg-accentColor',
        'max-h-14 rounded-lg px-6 py-3 font-inter text-sm font-medium leading-6 tracking-tighter text-mainLightColor transition aria-disabled:cursor-not-allowed aria-disabled:bg-textColor sm:text-base md:text-lg',
        full ? 'w-full' : '',
      )}
      aria-disabled={pending}
    >
      {children}
    </button>
  );
}

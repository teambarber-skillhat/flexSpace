'use client';
import React, { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...rest}
      className="max-h-14 min-w-36 rounded-lg bg-buttonBg px-6 py-4 font-inter text-lg font-medium leading-6 tracking-tighter text-mainLightColor transition hover:bg-accentColor aria-disabled:cursor-not-allowed aria-disabled:bg-textColor"
      aria-disabled={pending}
    >
      {children}
    </button>
  );
}

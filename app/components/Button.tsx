'use client';
import React, { ReactNode } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="min-w-36 rounded-lg bg-buttonBg px-6 py-4 font-inter text-lg font-medium leading-6 tracking-tighter text-mainLightColor"
    >
      {children}
    </button>
  );
}

'use client';
import React from 'react';
import clsx from 'clsx';
interface CardProps {
  svg: string;
  svgColor: string;
  bgColor: string;
  titleColor: string;
  textColor: string;
  title: string;
  text: string;
}

export default function Card({
  svg,
  svgColor,
  bgColor,
  titleColor,
  textColor,
  title,
  text,
}: CardProps) {
  return (
    <li
      className={clsx(
        'mb-6 flex flex-col items-start justify-center rounded-2xl p-4 md:p-6',
        bgColor,
      )}
    >
      <div className={clsx('mb-6 rounded-full p-2.5', svgColor)}>
        <svg width={32} height={32}>
          <use href={svg} />
        </svg>
      </div>
      <h3
        className={clsx(
          'mb-2 text-lg font-bold leading-6 tracking-[-0.3px]',
          titleColor,
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          'text-base font-medium leading-6 tracking-[-0.3px]',
          textColor,
        )}
      >
        {text}
      </p>
    </li>
  );
}

'use client';
import React from 'react';
import clsx from 'clsx';
interface ForCardProps {
  svg: string;
  title: string;
  text: string;
  isHost?: boolean;
}

export default function ForCard({ svg, title, text, isHost }: ForCardProps) {
  return (
    <li className="mb-6 flex items-start justify-between">
      <div
        className={clsx(
          'mr-4 rounded-full p-2.5',
          isHost ? 'bg-iconBgPrimary' : 'bg-iconBgSecondary',
        )}
      >
        <svg width={24} height={24}>
          <use href={svg} />
        </svg>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold leading-6 tracking-[-0.3px] text-titleColor">
          {title}
        </h3>
        <p className="text-base font-medium leading-6 tracking-[-0.3px] text-textColor">
          {text}
        </p>
      </div>
    </li>
  );
}

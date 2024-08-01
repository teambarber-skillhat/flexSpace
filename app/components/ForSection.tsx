import React from 'react';
import Section from './Section';
import clsx from 'clsx';

interface ForSectionProps {
  id: string;
  children: React.ReactNode;
  isHost: boolean;
  tag: string;
}

export default function ForSection({
  children,
  isHost,
  tag,
  id,
}: ForSectionProps) {
  return (
    <Section bgColor={isHost ? '' : 'bgColorHero'} id={id}>
      <div className="flex flex-col items-center justify-center gap-2">
        <span
          className={clsx(
            'rounded-3xl px-3 py-1',
            isHost
              ? 'bg-iconBgPrimary text-titleColorSecondary'
              : 'bg-color bg-iconBgSecondary text-iconSecondary',
          )}
        >
          {tag}
        </span>
        <h2 className="mb-10 text-2xl font-bold leading-[60px] tracking-[-1.75px] text-mainDarkColor">
          How It Works
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-10 lg:gap-20">
        {children}
      </div>
    </Section>
  );
}

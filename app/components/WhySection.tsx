import React from 'react';
import Section from './Section';
import clsx from 'clsx';

interface whySectionProps {
  id?: string;
  first: boolean;
  children: React.ReactNode;
  accentTitle: string;
  title: string;
  description: string;
}

export default function WhySection({
  id,
  first,
  children,
  accentTitle,
  title,
  description,
}: whySectionProps) {
  return (
    <Section id={id}>
      <div className="md:flex md:items-center md:justify-between">
        <div
          className={clsx(
            first
              ? 'order-first md:mr-10 lg:mr-20'
              : 'order-last md:ml-10 lg:ml-20',
            'flex-1',
          )}
        >
          <h2 className="text-2xl font-bold leading-[60px] tracking-[-1.75px] text-mainDarkColor md:text-[28px] lg:text-[40px]">
            Why <span className="text-accentColor">{accentTitle}</span> {title}
          </h2>
          <p className="mb-6 text-base font-medium leading-8 tracking-[-0.3px] text-textColorDark">
            {description}
          </p>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </Section>
  );
}

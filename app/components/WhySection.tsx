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
      <div className="lg:flex lg:items-center lg:justify-between">
        <div
          className={clsx(
            first
              ? 'xl:mr-20 order-first lg:mr-10'
              : 'xl:ml-20 order-last lg:ml-10',
            'flex-1',
          )}
        >
          <h2 className="xl:text-[40px] text-2xl font-bold leading-[60px] tracking-[-1.75px] text-mainDarkColor lg:text-[28px]">
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

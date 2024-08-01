import React from 'react';
import Section from './Section';

interface whySectionProps {
  children: React.ReactNode;
  accentTitle: string;
  title: string;
  description: string;
}

export default function WhySection({
  children,
  accentTitle,
  title,
  description,
}: whySectionProps) {
  return (
    <Section>
      <h2 className="text-2xl font-bold leading-[60px] tracking-[-1.75px] text-mainDarkColor">
        Why <span className="text-accentColor">{accentTitle}</span> {title}
      </h2>
      <p className="mb-6 text-base font-medium leading-8 tracking-[-0.3px] text-textColorDark">
        {description}
      </p>
      {children}
    </Section>
  );
}

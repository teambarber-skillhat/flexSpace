import { ReactNode } from 'react';

type SuptitleProps = {
  children: ReactNode;
  bgColor?: string;
  id?: string;
};

export default function Section({ children, bgColor, id }: SuptitleProps) {
  return (
    <section
      id={id}
      className={`px-6 py-5 md:px-12 md:py-20 lg:px-[120px] bg-${bgColor}`}
    >
      {children}
    </section>
  );
}

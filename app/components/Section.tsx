import { ReactNode } from 'react';

type SuptitleProps = {
  children: ReactNode;
  bgColor?: string;
  id?: string;
};

export default function Section({ children, bgColor, id }: SuptitleProps) {
  return (
    <section id={id} className={`px-6 py-5 bg-${bgColor}`}>
      {children}
    </section>
  );
}

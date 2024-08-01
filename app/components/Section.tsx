import { ReactNode } from 'react';

type SuptitleProps = {
  children: ReactNode;
  bgColor?: string;
};

export default function Section({ children, bgColor }: SuptitleProps) {
  return <section className={`px-6 py-5 bg-${bgColor}`}>{children}</section>;
}

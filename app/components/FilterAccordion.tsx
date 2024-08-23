import clsx from 'clsx';
import { useState } from 'react';

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function FilterAccordion({
  title,
  children,
}: FilterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        'p-4 transition-all duration-300 ease-in-out',
        'border-b border-[#e9e9e9]',
      )}
    >
      <div
        className="flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-bold leading-6 tracking-[-0.3px] text-titleColor">
          {title}
        </span>
        {!isOpen ? (
          <svg width={24} height={24}>
            <use href="/sprite.svg#icon-arrow-down" />
          </svg>
        ) : (
          <svg width={24} height={24}>
            <use href="/sprite.svg#icon-arrow-up" />
          </svg>
        )}
      </div>

      <div
        className={clsx(
          'transition-max-height overflow-hidden duration-300 ease-in-out',
          isOpen ? 'max-h-[300px]' : 'max-h-0',
        )}
      >
        <div className="my-4">{children}</div>
      </div>
    </div>
  );
}

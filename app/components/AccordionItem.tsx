import clsx from 'clsx';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div
      className={clsx(
        'p-4 transition-all duration-300 ease-in-out',
        isOpen ? 'border-none' : 'rounded-lg border-[1px] border-accentColor',
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-bold leading-6 tracking-[-0.3px] text-titleColor">
          {title}
        </span>
        {isOpen ? (
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
          isOpen ? 'max-h-[200px]' : 'max-h-0',
        )}
      >
        <p className="p-4 text-base font-medium leading-6 tracking-[-0.3px] text-textColor">
          {content}
        </p>
      </div>
    </div>
  );
}

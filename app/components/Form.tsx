import Button from './Button';
import clsx from 'clsx';

export default function Form({ second }: { second?: boolean }) {
  return (
    <form
      className={clsx(
        'mb-6 flex max-w-[432px] flex-row items-stretch justify-between rounded-lg border border-[#FC8E28] bg-mainLightColor px-4 py-2 md:mb-10',
        second ? '' : 'mx-auto',
      )}
    >
      <input type="email" className="w-36 p-2" placeholder="Enter your email" />
      <Button>Join Waitlist</Button>
    </form>
  );
}

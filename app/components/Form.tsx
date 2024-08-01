import Button from './Button';

export default function Form() {
  return (
    <form className="mb-6 flex max-w-[432px] flex-row items-stretch justify-between rounded-lg border border-[#FC8E28] bg-mainLightColor px-4 py-2">
      <input type="email" className="w-36 p-2" placeholder="Enter your email" />
      <Button>Join Waitlist</Button>
    </form>
  );
}

'use client';
import toast from 'react-hot-toast';
import Button from './Button';
import clsx from 'clsx';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';

const validateEmail = (email: FormDataEntryValue) => {
  const RegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return RegEx.test(String(email).toLowerCase());
};

export async function FormSubmit(prevState: string, formData: FormData) {
  const email = formData.get('email');
  if (!email) {
    return toast.error('Please enter a valid email');
  }

  if (email && !validateEmail(email)) {
    return toast.error('Invalid email address');
  }

  const response = await fetch('/api', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data;
}

export default function Form({ second }: { second?: boolean }) {
  const [state, FormAction] = useFormState(FormSubmit, '');
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 200) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      ref={ref}
      className={clsx(
        'mb-6 flex max-w-[432px] flex-row items-stretch justify-between rounded-lg border border-[#FC8E28] bg-mainLightColor px-4 py-2 md:mb-10',
        second ? '' : 'mx-auto',
      )}
      action={(formData) => {
        FormAction(formData);
        ref.current && ref.current.reset();
      }}
    >
      <input
        name="email"
        className="w-36 p-2 outline-none"
        placeholder="Enter your email"
      />
      <Button type="submit">Join Waitlist</Button>
    </form>
  );
}

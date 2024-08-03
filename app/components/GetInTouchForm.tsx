'use client';
import toast from 'react-hot-toast';
import Button from './Button';
import { FormEvent } from 'react';

export default function GetInTouchForm({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    toast.success('Thanks for your feedback');
    closeModal();
  };
  return (
    <form
      className="mb-6 flex flex-col items-center bg-mainLightColor px-4 py-2"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-center text-xl font-bold">Leave your message</h2>
      <div className="w-full">
        <label htmlFor="name">
          <p className="mb-2 font-semibold">Name:</p>
          <input
            id="name"
            name="name"
            type="text"
            className="mb-4 w-full rounded-lg border border-[#FC8E28] p-2"
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="email">
          <p className="mb-2 font-semibold">Email: </p>
          <input
            id="email"
            type="email"
            name="email"
            className="mb-4 w-full rounded-lg border border-[#FC8E28] p-2"
            placeholder="Enter your email"
          />
        </label>

        <label htmlFor="message">
          <p className="mb-2 font-semibold">Message: </p>
          <textarea
            name="message"
            id="message"
            className="mb-4 w-full rounded-lg border border-[#FC8E28] p-4"
            placeholder="Leave your message"
          />
        </label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

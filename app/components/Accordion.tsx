'use client';
import { SetStateAction, useState } from 'react';
import AccordionItem from './AccordionItem';

const items = [
  {
    title: 'How do I book a space?',
    content:
      'To book a space, search for your desired location and select your preferred workspace. Choose your dates and times, then proceed to checkout.',
  },
  {
    title: 'What payment methods do you accept?',
    content: 'We accept major credit cards and debit cards.',
  },
  {
    title: 'What if I need to cancel a booking?',
    content:
      'You can cancel a booking if necessary, but we encourage you to communicate with the stylist to reschedule or find a suitable solution. Our cancellation policy outlines any applicable fees.',
  },
  {
    title: 'Can I book a space for just a few hours?',
    content:
      'Yes, FlexSpace offers flexible booking options, allowing you to rent spaces by the hour, day, week, or month.',
  },
  {
    title: 'How do I list my salon space on FlexSpace?',
    content:
      'Listing your salon space is simple. Sign up on our platform, create a detailed listing with photos and descriptions, and set your availability and pricing.',
  },
  {
    title: 'Can I choose who rents my space?',
    content:
      'Yes, you have full control over who rents your space. You can review profiles and approve bookings based on your preferences.',
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: SetStateAction<number | null>) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="mb-10 flex flex-col gap-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

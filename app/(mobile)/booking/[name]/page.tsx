'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import FilterAccordion from '@/app/components/FilterAccordion';
import Button from '@/app/components/Button';
import { useRouter, usePathname } from 'next/navigation';
import { salons } from '@/app/api/mockdata';
import { useBookingContext } from '@/app/context/BookingContext';
import { weekDays } from '@/app/api/mockdata';

export default function Booking() {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const url = pathname?.split('/')?.[2];
  const salon = salons.find((salon) => salon.url === url);
  const { setSalonDetails } = useBookingContext();

  return (
    <div>
      <Image
        src={salon?.image as string}
        width={430}
        height={932}
        alt="salon-booking"
        className="mb-4"
      />
      <div className="absolute top-8 flex w-full justify-between px-6">
        <button
          className="w-[34px] rounded-full bg-bgOnCard p-2"
          type="button"
          onClick={() => router.back()}
        >
          <svg width={18} height={18} fill="white">
            <use href={'/sprite-app.svg#icon-arrow-left'} />
          </svg>
        </button>
        <div className="flex gap-4">
          <button
            className="w-[34px] rounded-full bg-bgOnCard p-2"
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <svg width={18} height={18} fill="white">
                <use href={'/sprite-app.svg#icon-heart'} />
              </svg>
            ) : (
              <svg width={18} height={18}>
                <use href={'/sprite-app.svg#icon-heart-favorite'} />
              </svg>
            )}
          </button>
          <button
            className="w-[34px] rounded-full bg-bgOnCard p-2"
            type="button"
          >
            <svg width={18} height={18}>
              <use href={'/sprite-app.svg#icon-share'} />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-6 pb-28">
        <div className="border-b border-[#E9E9E9] pb-10 pt-2">
          {' '}
          <h2 className="mb-4 text-xl font-bold text-headerColor">
            {salon?.name}
          </h2>
          <div className="mb-4 flex">
            <svg width={18} height={18} className="mr-1">
              <use href={'/sprite-app.svg#icon-location'} />
            </svg>
            <p className="mr-3 text-xs text-[#61646B]">{salon?.location}</p>
            <p className="text-xs text-[#61646B]">{salon?.distance}</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded bg-[#AF52DE26] px-2 py-1 text-xs font-medium text-[#5B0885]">
              Salon
            </span>
            <span className="rounded bg-[#EB963F26] px-2 py-1 text-xs font-medium text-[#802B00]">
              Barber Shop
            </span>
            <span className="rounded bg-[#32BA7726] px-2 py-1 text-xs font-medium text-[#09713D]">
              Nail Salon
            </span>
          </div>
        </div>
        <FilterAccordion title="Available Rental Hours" initialState={true}>
          <p className="mb-4 text-end text-xs font-medium text-[#585858]">
            Dates and times are in est
          </p>
          <ul className="flex flex-col gap-4">
            {weekDays.map(({ day, hours }) => (
              <li key={day} className="flex justify-between">
                <span className="text-sm font-medium text-[#AEAEB2]">
                  {day}
                </span>
                <span className="text-sm font-medium text-headerColor">
                  {hours}
                </span>
              </li>
            ))}
          </ul>
        </FilterAccordion>
        <FilterAccordion title="About the salon">
          <p className="text-justify text-sm">
            {salon?.name} is a modern and vibrant space dedicated to providing
            top-notch beauty services tailored to your unique style. Our skilled
            team of professionals specializes in a wide range of treatments,
            including haircuts, color, styling, and specialized beauty services.
            We pride ourselves on using the highest quality products to ensure
            that every client leaves feeling refreshed and confident. At Leo
            Salon, customer satisfaction is our top priority, and we go above
            and beyond to create a relaxing and welcoming environment. Whether
            you&apos;re looking for a quick trim or a complete makeover, Leo
            Salon is the perfect place to pamper yourself and enhance your
            natural beauty
          </p>
        </FilterAccordion>
        <FilterAccordion title="Who can rent this place">
          <div className="flex gap-2">
            <span className="rounded bg-[#AF52DE26] px-2 py-1 text-xs font-medium text-[#5B0885]">
              Braider
            </span>
            <span className="rounded bg-[#EB963F26] px-2 py-1 text-xs font-medium text-[#802B00]">
              Barber
            </span>
            <span className="rounded bg-[#32BA7726] px-2 py-1 text-xs font-medium text-[#09713D]">
              Nail Tech
            </span>
          </div>
        </FilterAccordion>
        <FilterAccordion title="What makes it special">
          <p className="mb-4 text-xs font-medium text-[#585858]">WiFi</p>
          <p className="mb-4 text-xs font-medium text-[#585858]">Parking</p>
          <p className="mb-4 text-xs font-medium text-[#585858]">Mirror</p>
          <p className="mb-4 text-xs font-medium text-[#585858]">Closed</p>
          <p className="mb-4 text-xs font-medium text-[#585858]">Ring Light</p>
          <Button full={true} empty={true}>
            Show all 12 amenities
          </Button>
        </FilterAccordion>

        <div className="my-6 flex flex-col items-center rounded-lg bg-gray p-4">
          <p className="mb-2 text-sm font-bold">Host</p>
          <Image
            src="/avatar-host.png"
            alt="avatar"
            className="mb-2 rounded-xl"
            width={40}
            height={40}
          />
          <div className="mb-2">
            <p className="font-bold">Jenny Wilson</p>
            <p className="text-xs font-medium text-[#585858]">
              Responds within 1hr
            </p>
          </div>
          <Button full={true}>Message Host</Button>
        </div>

        <FilterAccordion title="Space Rules">
          <ul className="list-disc space-y-2 pl-5">
            <li>Be on time for your appointments.</li>
            <li>Cancel at least 24 hours in advance.</li>
            <li>No smoking inside the salon.</li>
            <li>Keep phones on silent.</li>
            <li>No food or drinks in service areas.</li>
            <li>Supervise your children at all times.</li>
            <li>Respect others in the salon.</li>
            <li>Keep personal belongings secure.</li>
          </ul>
        </FilterAccordion>
        <FilterAccordion title="Cancelation Policy">
          <ul className="list-disc space-y-2 pl-5">
            <li>Cancel at least 24 hours before your appointment.</li>
            <li>Late cancellations may incur a fee.</li>
            <li>No-shows will be charged the full service amount.</li>
            <li>Rescheduling less than 24 hours may not be possible.</li>
            <li>
              Multiple late cancellations can result in appointment
              restrictions.
            </li>
          </ul>
        </FilterAccordion>
      </div>

      <div className="fixed bottom-0 w-full bg-gray p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-headerColor">
              from{' '}
              <span className="text-xl font-bold text-headerColor">
                {salon?.price}
              </span>
            </p>
            <p className="text-[#585858]">Chair-Rental</p>
          </div>
          <Button
            primary={true}
            onClick={() => {
              router.push(`${pathname}/select-date`);
              salon && setSalonDetails(salon);
            }}
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}

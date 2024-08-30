'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';
import Modal from '@/app/components/PaymentModal';
import { useBookingContext } from '@/app/context/BookingContext';
import { getTimeDifference, addHoursToDuration } from '@/app/helpers';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Confirmation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {
    dateDetails,
    price,
    timeDetails,
    salonDetails,
    cardDetails,
    applePay,
  } = useBookingContext();

  const { start, end, diff } = getTimeDifference(
    timeDetails.checkIn,
    timeDetails.checkOut,
  );
  const preTax = Math.round(price * Number(diff) * 10) / 10;
  const tax = Math.round(preTax * 0.08 * 10) / 10;
  const total = Math.round((preTax + tax) * 10) / 10;

  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-0 h-full w-full bg-mainLightColor">
        <div className="flex justify-center border-b border-[#E9E9E9] px-6 py-4">
          <button className="absolute left-6" onClick={() => router.back()}>
            <svg width={24} height={24}>
              <use href="/sprite-app.svg#icon-arrow" />
            </svg>
          </button>
          <p className="font-bold text-mainDarkColor">Booking Confirmation</p>
        </div>

        <div className="flex flex-col gap-6 p-6">
          <Link
            href={`/booking/${salonDetails.url}`}
            className="flex gap-4 rounded bg-gray p-4"
          >
            <Image
              width={100}
              height={96}
              alt="salon"
              src={salonDetails.image}
            />
            <div>
              <p className="mb-1 text-sm font-semibold text-headerColor">
                {salonDetails.name}
              </p>
              <div className="mb-1 flex">
                <svg width={18} height={18} className="mr-1">
                  <use href={'/sprite-app.svg#icon-location'} />
                </svg>
                <p className="mr-3 text-xs text-[#61646B]">
                  {' '}
                  {salonDetails.location}
                </p>
                <p className="text-xs text-[#61646B]">
                  {' '}
                  {salonDetails.distance}
                </p>
              </div>
              <p className="text-xs text-accentColor">
                from <span className="font-semibold">${price}/hr</span>
              </p>
            </div>
          </Link>

          <div className="border-b border-gray pb-6">
            <p className="mb-4 font-bold text-mainDarkColor">Booking Details</p>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-headerColor">
                {`${dateDetails.month} ${dateDetails.day}, ${dateDetails.year}`}
              </span>
              <span className="text-sm font-medium text-headerColor">
                ${price}/hr
              </span>
            </div>
            <p className="text-xs text-[#838383]">
              {start} - {end} ({addHoursToDuration(diff)})
            </p>
          </div>

          <div className="border-b border-gray pb-6">
            <p className="mb-4 font-bold text-mainDarkColor">Price Details</p>
            <div className="mb-4 flex justify-between">
              <span className="text-sm font-medium text-headerColor">
                ${price} x {addHoursToDuration(diff)}
              </span>
              <span className="text-sm font-medium text-headerColor">
                ${price * Number(diff)}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-headerColor">
                  Service Fee
                </span>
                <span className="text-sm font-medium text-headerColor">
                  $10
                </span>
              </div>
              <p className="text-xs text-[#838383]">
                Covers platform fees and processing charges
              </p>
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-medium text-headerColor">
                Sales Tax (8%)
              </span>
              <span className="text-sm font-medium text-headerColor">
                ${tax}
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-sm font-semibold text-headerColor">
              Total
            </span>
            <span className="text-sm font-medium text-headerColor">
              ${total}
            </span>
          </div>

          <div className="border-b border-gray py-9">
            <p className="mb-4 font-bold text-mainDarkColor">Payment method</p>
            <div
              className="flex cursor-pointer justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!cardDetails.cardNumber && !applePay ? (
                <span className="text-sm font-medium text-headerColor">
                  Select Payment method
                </span>
              ) : (
                <div className="flex justify-center gap-1">
                  <Image
                    src={
                      cardDetails.cardNumber ? '/visa.svg' : '/apple-pay.svg'
                    }
                    height={32}
                    alt="visa"
                    width={32}
                    className="h-8 w-8"
                  />
                  {cardDetails.cardNumber && (
                    <span className="mt-2 text-[#838383]">
                      ****{' '}
                      {cardDetails.cardNumber.slice(
                        cardDetails.cardNumber.length - 5,
                        cardDetails.cardNumber.length - 1,
                      )}
                    </span>
                  )}
                </div>
              )}

              <svg width={18} height={18} className="-rotate-180">
                <use href={'/sprite-app.svg#icon-arrow'} />
              </svg>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 flex w-full justify-between border-t border-[#E9E9E9] bg-[#E9E9E9] p-6">
          <div>
            <p className="text-headerColor">
              <span className="text-xl font-bold text-headerColor">
                ${total}
              </span>
            </p>
            <p className="text-[#585858]">Chair-Rental</p>
          </div>
          <Button
            primary={true}
            onClick={() => {
              toast.success(
                'Your booking has been placed and is now awaiting approval.',
                {
                  duration: 3000,
                },
              );
              // router.push('/explore');
              router.replace('/my-bookings/upcoming');
            }}
            disabled={!cardDetails.cardNumber && !applePay}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
}

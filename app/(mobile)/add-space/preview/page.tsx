'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import FilterAccordion from '@/app/components/FilterAccordion';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import { useAddSpaceContext } from '@/app/context/AddSpaceContext';
import clsx from 'clsx';
import { formatHours } from '@/app/helpers';
import { weekDaysShort } from '@/app/api/mockdata';

export default function Preview() {
  const router = useRouter();
  const { spaceDetails, basicInfo, availability } = useAddSpaceContext();

  useEffect(() => {
    if (!basicInfo.name || !basicInfo.address) {
      router.push('/add-space/basic-info');
    }
  }, [basicInfo.address, basicInfo.name, router]);

  return (
    basicInfo?.name && (
      <div>
        {spaceDetails?.coverImg && (
          <Image
            src={spaceDetails?.coverImg as string}
            width={430}
            height={932}
            alt="salon-booking"
            className="mb-4"
          />
        )}
        <div className="absolute top-8 flex w-full justify-between px-6"></div>

        <div className="px-6 pb-28">
          <div className="border-b border-[#E9E9E9] pb-10 pt-2">
            {' '}
            <h2 className="mb-4 text-xl font-bold text-headerColor">
              {basicInfo?.name}
            </h2>
            <div className="mb-4 flex">
              <svg width={18} height={18} className="mr-1">
                <use href={'/sprite-app.svg#icon-location'} />
              </svg>
              <p className="mr-3 text-xs text-[#61646B]">
                {basicInfo?.address}
              </p>
            </div>
            {spaceDetails?.workspace && (
              <ul className="flex gap-2">
                {spaceDetails?.workspace.map((space, idx) => {
                  return (
                    <li
                      key={`${space}-${idx}`}
                      className={clsx(
                        'flex items-center justify-center rounded px-2 py-1 text-xs font-medium',
                        idx % 3 === 0
                          ? 'bg-[#AF52DE26] text-[#5B0885]'
                          : idx % 3 === 1
                            ? 'bg-[#EB963F26] text-[#802B00]'
                            : 'bg-[#32BA7726] text-[#09713D]',
                      )}
                    >
                      {space}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {availability?.days && (
            <FilterAccordion title="Available Rental Hours" initialState={true}>
              <p className="mb-4 text-end text-xs font-medium text-[#585858]">
                Dates and times are in est
              </p>
              <ul className="flex flex-col gap-4">
                {weekDaysShort.map(({ day, short }) => (
                  <li key={day} className="flex justify-between">
                    <span className="text-sm font-medium text-[#AEAEB2]">
                      {day}
                    </span>
                    <span className="text-sm font-medium text-headerColor">
                      {availability.days.includes(short)
                        ? `${formatHours(Number(availability?.hours.open.split(':')?.[0]))} - ${formatHours(Number(availability?.hours.close.split(':')?.[0]))}`
                        : 'Closed'}
                    </span>
                  </li>
                ))}
              </ul>
            </FilterAccordion>
          )}

          {basicInfo.about && (
            <FilterAccordion title="About the salon">
              <p className="text-justify text-sm">{basicInfo.about}</p>
            </FilterAccordion>
          )}

          {spaceDetails?.speciality && (
            <FilterAccordion title="Who can rent this place">
              <ul className="flex gap-2">
                {spaceDetails?.speciality.map((item, idx) => {
                  return (
                    <li
                      key={`${item}-${idx}`}
                      className={clsx(
                        'rounded px-2 py-1 text-xs font-medium',
                        idx % 3 === 0
                          ? 'bg-[#AF52DE26] text-[#5B0885]'
                          : idx % 3 === 1
                            ? 'bg-[#EB963F26] text-[#802B00]'
                            : 'bg-[#32BA7726] text-[#09713D]',
                      )}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </FilterAccordion>
          )}

          {spaceDetails?.amenities && (
            <FilterAccordion title="What makes it special">
              <ul className="flex flex-col gap-2">
                {spaceDetails?.amenities.map((item, idx) => {
                  return (
                    <li key={`${item}-${idx}`}>
                      <p className="mb-4 text-xs font-medium text-[#585858]">
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>

              {spaceDetails?.amenities?.length > 10 && (
                <Button full={true} empty={true}>
                  Show all {spaceDetails?.amenities?.length} amenities
                </Button>
              )}
            </FilterAccordion>
          )}

          <div className="my-6 flex flex-col items-center rounded-lg bg-gray p-4">
            <p className="mb-2 text-sm font-bold">Host</p>
            <Image
              src="/avatar-profile.png"
              alt="avatar"
              className="mb-2 rounded-xl"
              width={40}
              height={40}
            />
            <div className="mb-2">
              <p className="font-bold">Jenny Wilson</p>
            </div>
          </div>

          {spaceDetails?.rules && (
            <FilterAccordion title="Space Rules">
              <p>{spaceDetails?.rules}</p>
            </FilterAccordion>
          )}
          {spaceDetails?.policy && (
            <FilterAccordion title="Cancelation Policy">
              <p>{spaceDetails?.policy}</p>
            </FilterAccordion>
          )}
        </div>
      </div>
    )
  );
}

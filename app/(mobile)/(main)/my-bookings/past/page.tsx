'use client';
import Image from 'next/image';
import { pastSalons } from '@/app/api/mockdata';
import Button from '@/app/components/Button';
import clsx from 'clsx';

export default function Past() {
  return (
    <>
      {pastSalons.map((salon) => {
        return (
          <div key={salon.id} className="relative mb-6 rounded-lg bg-gray p-4">
            <div className="mb-3 flex gap-4">
              <Image
                width={100}
                height={96}
                alt="salon"
                src={salon.image}
                className="min-h-[96px] min-w-[100px] rounded"
              />
              <div>
                <p className="mb-1 text-sm font-semibold text-headerColor">
                  {salon.name}
                </p>
                <div
                  className={clsx(
                    salon.status === 'Completed'
                      ? 'bg-[#32BA7726] text-[#09713D]'
                      : 'bg-[#DC000026] text-[#DC0000]',
                    'absolute right-4 top-4 w-16 rounded px-2 py-1 text-[10px]',
                  )}
                >
                  {salon.status}
                </div>
                <div className="mb-1 flex">
                  <svg width={18} height={18} className="mr-1">
                    <use href={'/sprite-app.svg#icon-location'} />
                  </svg>
                  <p className="mr-3 text-xs text-[#61646B]">
                    {' '}
                    {salon.location}
                  </p>
                  <p className="text-xs text-[#61646B]"> {salon.distance}</p>
                </div>
                <p className="text-xs text-accentColor">
                  from <span className="font-semibold">{salon.price}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button full={true} empty={true}>
                Book Again
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}

'use client';
import WorkspaceTypes from '@/app/components/SpaceTypes';
import Banner from '@/app/components/Banner';
import SpacesNearYou from '@/app/components/SpacesNearYou';
import { useProfileContext, Profile } from '@/app/context/ProfileContext';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

export default function Explore() {
  const { profileType } = useProfileContext();
  const [activeIdx, setActiveIdx] = useState(1);
  const router = useRouter();
  const addSpace = () => {
    router.push('/add-space/basic-info');
  };

  const getLocalStorageItem = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  };

  const salonData = getLocalStorageItem('space');
  const salon = salonData ? JSON.parse(salonData) : null;

  return (
    <div>
      {profileType === Profile.Stylist ? (
        <>
          <WorkspaceTypes />
          <Banner />
          <SpacesNearYou />
        </>
      ) : (
        <div className="relative p-6">
          {!salon?.name ? (
            <div className="rounded-2xl bg-[#F2F2F2] p-4">
              <h2 className="mb-4 text-base font-bold text-headerColor">
                Turn Your Space into a{' '}
                <span className="text-accentColor">Money-Maker!</span>
              </h2>
              <p className="mb-4 text-sm font-medium text-textColor">
                Maximize your space&apos;s potential by renting it out to
                talented professionals. Enjoy flexible scheduling and additional
                income.
              </p>
              <Button empty={true} onClick={addSpace}>
                List a Space
              </Button>
            </div>
          ) : (
            <>
              <div className="p-6">
                <div className="flex rounded bg-gray p-1">
                  <button
                    className={clsx(
                      activeIdx === 0
                        ? 'bg-accentColor py-1 text-mainLightColor'
                        : 'bg-transparent text-[#AEAEB2]',
                      'flex-1 rounded',
                    )}
                    onClick={() => setActiveIdx(0)}
                  >
                    Active
                  </button>
                  <button
                    className={clsx(
                      activeIdx === 1
                        ? 'bg-accentColor py-1 text-mainLightColor'
                        : 'bg-transparent text-[#AEAEB2]',
                      'flex-1 rounded',
                    )}
                    onClick={() => setActiveIdx(1)}
                  >
                    Pending
                  </button>
                  <button
                    className={clsx(
                      activeIdx === 2
                        ? 'bg-accentColor py-1 text-mainLightColor'
                        : 'bg-transparent text-[#AEAEB2]',
                      'flex-1 rounded',
                    )}
                    onClick={() => setActiveIdx(2)}
                  >
                    Unpublished
                  </button>
                </div>
              </div>

              <div
                key={salon.name}
                className="relative mb-6 rounded-lg bg-gray p-4"
              >
                <div className="mb-3 flex gap-4">
                  <Image
                    width={100}
                    height={96}
                    alt="salon"
                    src={salon.cover}
                    className="min-h-[96px] min-w-[100px] rounded"
                  />
                  <div>
                    <p className="mb-1 text-sm font-semibold text-headerColor">
                      {salon.name}
                    </p>

                    <div className="absolute bottom-4 right-4 w-16 rounded bg-[#DC000026] px-2 py-1 text-[10px] text-[#DC0000]">
                      Awaiting Approval
                    </div>

                    <div className="mb-1 flex">
                      <svg width={18} height={18} className="mr-1">
                        <use href={'/sprite-app.svg#icon-location'} />
                      </svg>
                      <p className="mr-3 text-xs text-[#61646B]">
                        {' '}
                        {salon.address}
                      </p>
                    </div>
                    <p className="text-xs text-accentColor">
                      from{' '}
                      <span className="font-semibold">${salon.price}/hr</span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            className="absolute right-[24px] top-[500px] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-mainDarkColor shadow-2xl hover:bg-accentColor"
            onClick={addSpace}
          >
            <Image src="/plus.svg" alt="icon-plus" width={36} height={36} />
          </div>
        </div>
      )}
    </div>
  );
}

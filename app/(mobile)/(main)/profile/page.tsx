'use client';
import React from 'react';
import Image from 'next/image';
import { useProfileContext } from '@/app/context/ProfileContext';
import { Profile } from '@/app/context/ProfileContext';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { profileType, setProfileType } = useProfileContext();
  const router = useRouter();

  const onProfileTypeChange = () => {
    if (profileType === Profile.Host) {
      setProfileType(Profile.Stylist);
    } else {
      setProfileType(Profile.Host);
    }
    router.push('/explore');
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="fixed bottom-0 h-full w-full bg-mainLightColor">
          <div className="flex justify-start border-b border-[#E9E9E9] px-6 py-4">
            <p className="font-bold text-mainDarkColor">Profile</p>
          </div>
          <div className="custom-scrollbar flex h-[80%] flex-col gap-6 overflow-y-auto p-6 pb-[104px]">
            <div className="group flex cursor-pointer items-center justify-between rounded-lg bg-[#f2f2f2] p-4">
              <div className="flex">
                <Image
                  src="/avatar-profile.png"
                  alt="avatar"
                  className="mr-4 rounded-full"
                  width={56}
                  height={56}
                />
                <div>
                  <p className="text-sm font-bold text-headerColor">
                    Zack Andrew
                  </p>
                  <p className="text-xs font-medium text-accentColor">
                    Profile
                  </p>
                </div>
              </div>
              <svg width={18} height={18} className="-rotate-180">
                <use href={'/sprite-app.svg#icon-arrow'} />
              </svg>
            </div>

            <div className="rounded-lg bg-[#f2f2f2] p-4">
              <p className="mb-4 text-sm font-bold text-headerColor">
                Settings
              </p>

              <div className="flex flex-col gap-4">
                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Search Preferences
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>

                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Notification
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>

                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Payment Methods
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>

                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Referral
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-[#f2f2f2] p-4">
              <p className="mb-4 text-sm font-bold text-headerColor">
                {profileType === Profile.Host
                  ? 'Hosting'
                  : 'Find a Space to Book'}
              </p>

              <div
                className="group flex cursor-pointer items-center justify-between"
                onClick={onProfileTypeChange}
              >
                <p className="text-xs font-medium text-accentColor group-hover:text-headerColor">
                  {profileType === Profile.Host
                    ? 'Switch to Stylist View'
                    : 'Switch to Host View'}
                </p>
                <svg width={18} height={18} className="-rotate-180">
                  <use href={'/sprite-app.svg#icon-arrow'} />
                </svg>
              </div>
            </div>

            <div className="rounded-lg bg-[#f2f2f2] p-4">
              <p className="mb-4 text-sm font-bold text-headerColor">Support</p>

              <div className="flex flex-col gap-4">
                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Contact Us
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>

                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Help Center
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>

                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Privacy Policy
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>

                <div className="group flex cursor-pointer items-center justify-between">
                  <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                    Terms of Use
                  </p>
                  <svg width={18} height={18} className="-rotate-180">
                    <use href={'/sprite-app.svg#icon-arrow'} />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-[#f2f2f2] p-4">
              <p className="mb-4 text-sm font-bold text-headerColor">Hosting</p>

              <div className="group flex cursor-pointer items-center justify-between">
                <p className="text-xs font-medium text-headerColor group-hover:text-accentColor">
                  Log out
                </p>
                <svg width={18} height={18} className="-rotate-180">
                  <use href={'/sprite-app.svg#icon-arrow'} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

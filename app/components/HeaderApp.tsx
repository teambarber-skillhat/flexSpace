import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { getFomattedDate } from '../helpers';
import { Profile, useProfileContext } from '../context/ProfileContext';

type HeaderProps = {
  isFocused: boolean;
  showFilters: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderApp({
  isFocused,
  showFilters,
  setIsFocused,
  setShowFilters,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(pathname.split('/')?.[2] || '');
  const { profileType } = useProfileContext();

  const hasSlug = pathname.split('/').length > 2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/explore/${value}`);
    setIsFocused(false);
  };

  const onCancelClick = () => {
    router.push('/explore');
    setIsFocused(false);
  };

  return (
    <header className="fixed z-50 w-full rounded-b-3xl bg-accentColor p-6">
      <div
        className={clsx(
          isFocused || hasSlug
            ? 'hidden'
            : 'mb-4 flex items-center justify-between',
        )}
      >
        <div className="">
          <p className="text-base font-bold text-mainLightColor">
            {profileType === Profile.Host ? 'Hi, Jenny' : 'Hi, Zack'}
          </p>
          <p className="text-[12px] font-semibold text-mainLightColor">
            {profileType === Profile.Host
              ? 'Turn Your Space into a Money-Maker!'
              : 'Find Your Perfect Workspace.'}
          </p>
        </div>

        <Image
          src={
            profileType === Profile.Host
              ? '/avatar-host.jpg'
              : '/avatar-profile.png'
          }
          alt="avatar"
          className="h-10 w-10 rounded-xl object-cover"
          width={40}
          height={40}
        />
      </div>

      <form className="flex" onSubmit={handleSubmit}>
        {hasSlug && (
          <button type="button" className="mr-3" onClick={onCancelClick}>
            <svg width={24} height={24}>
              <use href="/sprite-app.svg#icon-arrow-left" />
            </svg>
          </button>
        )}
        <input
          type="text"
          className={clsx(
            isFocused ? 'mr-4' : 'mr-0',
            'h-12 w-full rounded-lg p-4',
          )}
          placeholder="search by location or workspace type"
          onFocus={() => setIsFocused(true)}
          onChange={handleChange}
          value={value}
        />
        {!hasSlug && (
          <button
            className={clsx(
              !isFocused
                ? 'hidden'
                : 'bg-transparent text-sm font-medium text-mainLightColor',
            )}
            type="button"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        )}
      </form>
      {hasSlug && (
        <div className="mt-4 flex justify-between pl-10">
          <input
            type="date"
            className="w-[180px] rounded-lg bg-mainLightColor px-[14px] py-3"
            defaultValue={getFomattedDate()}
          />
          <button
            type="button"
            className="rounded-lg bg-mainLightColor p-3"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg width={24} height={24}>
              <use href="/sprite-app.svg#icon-filters" />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-buttonBg px-6 py-10">
      <div className="mb-6 px-0 py-4">
        <p className="font-jockeyOne text-2xl text-mainLightColor">FlexSpace</p>
      </div>
      <nav className="flex flex-col gap-6">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="#host"
              className="text-link p-2 text-lg font-bold leading-6 tracking-[-0.3px]"
            >
              Why Host On FlexSpace
            </Link>
          </li>
          <li>
            <Link
              href="#rent"
              className="text-link p-2 text-lg font-bold leading-6 tracking-[-0.3px]"
            >
              Why Rent With FlexSpace
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="#for-host"
              className="text-link p-2 text-lg font-bold leading-6 tracking-[-0.3px]"
            >
              How It Works (For Host)
            </Link>
          </li>
          <li>
            <Link
              href="#for-stylist"
              className="text-link p-2 text-lg font-bold leading-6 tracking-[-0.3px]"
            >
              How It Works (For Stylist)
            </Link>
          </li>
        </ul>
      </nav>
      <div className="my-12 border-t text-cardBgThree" />
      <p className="text-center font-jockeyOne text-base font-normal tracking-[-0.3px] text-titleColorSecondary">
        © 2024 FlexSpace.
      </p>
    </footer>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-buttonBg px-6 py-10 md:px-8 md:py-20 lg:px-[120px] lg:py-20">
      <div className="items-start justify-between md:flex">
        <div className="mb-6 px-0 py-4">
          <Link href="#home">
            <Image src="/logo-footer.svg" height={122} alt="logo" width={86} />
          </Link>
        </div>
        <nav className="flex flex-col gap-6 md:flex-row">
          <ul className="flex flex-col gap-2 md:gap-6">
            <li>
              <Link
                href="#host"
                className="p-2 text-lg font-bold leading-6 tracking-[-0.3px] text-link"
              >
                Why Host On FlexSpace
              </Link>
            </li>
            <li>
              <Link
                href="#rent"
                className="p-2 text-lg font-bold leading-6 tracking-[-0.3px] text-link"
              >
                Why Rent With FlexSpace
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 md:gap-6">
            <li>
              <Link
                href="#for-host"
                className="p-2 text-lg font-bold leading-6 tracking-[-0.3px] text-link"
              >
                How It Works (For Host)
              </Link>
            </li>
            <li>
              <Link
                href="#for-stylist"
                className="p-2 text-lg font-bold leading-6 tracking-[-0.3px] text-link"
              >
                How It Works (For Stylist)
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="my-12 border-t text-cardBgThree" />
      <p className="text-center font-jockeyOne text-base font-normal tracking-[-0.3px] text-titleColorSecondary">
        © 2024 FlexSpace.
      </p>
    </footer>
  );
}

'use client';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="fixed bottom-0 h-full w-full bg-mainLightColor">
          <div className="flex justify-start border-b border-[#E9E9E9] px-6 py-4">
            <p className="font-bold text-mainDarkColor">My Booking</p>
          </div>
          <div className="p-6">
            <div className="flex rounded bg-gray p-1">
              <button
                className={clsx(
                  pathname.includes('upcoming')
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => router.push('/my-bookings/upcoming')}
              >
                Upcoming
              </button>
              <button
                className={clsx(
                  pathname.includes('pending')
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => router.push('/my-bookings/pending')}
              >
                Pending
              </button>
              <button
                className={clsx(
                  pathname.includes('past')
                    ? 'bg-accentColor py-1 text-mainLightColor'
                    : 'bg-transparent text-[#AEAEB2]',
                  'flex-1 rounded',
                )}
                onClick={() => router.push('/my-bookings/past')}
              >
                Past
              </button>
            </div>
          </div>
          <div className="custom-scrollbar h-[80%] overflow-y-auto p-6 pb-[104px]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

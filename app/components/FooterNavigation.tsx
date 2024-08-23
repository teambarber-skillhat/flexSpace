'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FooterNavigation() {
  const pathname = usePathname();

  const links = [
    {
      href: '/explore',
      icon: 'search-normal',
      activeIcon: 'search-active',
      label: 'Explore',
    },
    {
      href: '/favorites',
      icon: 'heart',
      activeIcon: 'heart',
      label: 'Favourites',
    },
    {
      href: '/my-bookings',
      icon: 'calendar',
      activeIcon: 'calendar-active',
      label: 'My bookings',
    },
    {
      href: '/message',
      icon: 'messages',
      activeIcon: 'messages',
      label: 'Message',
    },
    {
      href: '/profile',
      icon: 'profile-circle',
      activeIcon: 'profile-circle',
      label: 'Profile',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#f2f2f2] p-6">
      <ul className="flex items-center justify-between py-2">
        {links.map(({ href, icon, activeIcon, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                pathname === href
                  ? 'flex gap-2 rounded-[300px] bg-mainLightColor px-3 py-2'
                  : ''
              }
            >
              <svg width={24} height={24} fill="gray">
                <use
                  href={`/sprite-app.svg#icon-${pathname === href ? activeIcon : icon}`}
                />
              </svg>
              {pathname === href && (
                <p className="font-bold text-accentColor">{label}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

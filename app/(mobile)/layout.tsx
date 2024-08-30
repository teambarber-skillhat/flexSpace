'use client';
import { ProfileProvider } from '@/app/context/ProfileContext';
import { BookingProvider } from '@/app/context/BookingContext';
import { AddSpaceProvider } from '../context/AddSpaceContext';

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <AddSpaceProvider>
        <ProfileProvider>{children} </ProfileProvider>
      </AddSpaceProvider>
    </BookingProvider>
  );
}

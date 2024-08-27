import React from 'react';
import clsx from 'clsx';
import { useBookingContext } from '../context/BookingContext';

interface CalendarProps {
  prices: { [key: number]: number };
  availableDates: { [monthIndex: number]: Set<number> };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Calendar({
  prices,
  availableDates,
  setIsOpen,
}: CalendarProps) {
  const { setDateDetails, setPrice } = useBookingContext();

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getMonthRange = (startDate: Date) => {
    const months = [];
    for (let i = 0; i < 4; i++) {
      const monthDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + i,
        1,
      );
      months.push(monthDate);
    }
    return months;
  };

  const months = getMonthRange(new Date());

  return (
    <div className="flex flex-col">
      {months.map((date, monthIndex) => {
        const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
        const firstDayOfMonth = getFirstDayOfMonth(
          date.getMonth(),
          date.getFullYear(),
        );

        return (
          <div key={monthIndex} className="my-6">
            <h2 className="mb-3 text-center text-base font-semibold">
              {monthNames[date.getMonth()]} - {date.getFullYear()}
            </h2>
            <div className="mb-2 grid grid-cols-7 border-y border-gray text-center font-semibold">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="flex justify-center p-3 text-base text-gray"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 text-center">
              {Array(firstDayOfMonth)
                .fill(null)
                .map((_, index) => (
                  <div key={`empty-${index}`} className="py-2"></div>
                ))}
              {Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1;
                const price = prices[day] !== undefined ? prices[day] : 0;

                const monthAvailableDates =
                  availableDates[monthIndex] || new Set();
                const isAvailable = monthAvailableDates.has(day);

                return isAvailable ? (
                  <button
                    onClick={() => {
                      setDateDetails({
                        day,
                        month: monthNames[date.getMonth()],
                        year: date.getFullYear(),
                      });
                      setPrice(price);

                      setIsOpen(true);
                    }}
                    key={day}
                    className={clsx(
                      'flex flex-col items-center px-4 py-2 text-sm font-medium',
                      !isAvailable
                        ? 'text-gray line-through'
                        : 'text-headerColor',
                    )}
                  >
                    {day < 10 ? `0${day}` : day}
                    {isAvailable && (
                      <div className="text-xs font-medium text-accentColor">
                        {price !== 0 ? `$${price}` : ''}
                      </div>
                    )}
                  </button>
                ) : (
                  <div
                    key={day}
                    className={clsx(
                      'flex flex-col items-center px-4 py-2 text-sm font-medium',
                      !isAvailable
                        ? 'text-gray line-through'
                        : 'text-headerColor',
                    )}
                  >
                    {day < 10 ? `0${day}` : day}
                    {isAvailable && (
                      <div className="text-xs font-medium text-accentColor">
                        {price !== 0 ? `$${price}` : ''}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

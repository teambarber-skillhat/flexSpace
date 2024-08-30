import { ChangeEvent, useState } from 'react';
import { useBookingContext } from '../context/BookingContext';

export default function TimePicker() {
  const [error, setError] = useState('');
  const { setTimeDetails } = useBookingContext();
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleCheckInChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckInTime = event.target.value;
    setCheckInTime(newCheckInTime);
    validateTimes(newCheckInTime, checkOutTime);
    setTimeDetails((prevState) => {
      return { ...prevState, checkIn: newCheckInTime };
    });
  };

  const handleCheckOutChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckOutTime = event.target.value;
    setCheckOutTime(newCheckOutTime);
    validateTimes(checkInTime, newCheckOutTime);
    setTimeDetails((prevState) => {
      return { ...prevState, checkOut: newCheckOutTime };
    });
  };

  const validateTimes = (start: string, end: string) => {
    if (start && end) {
      const startTime = new Date(`1970-01-01T${start}:00`);
      const endTime = new Date(`1970-01-01T${end}:00`);
      const timeDifference =
        (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

      if (timeDifference < 2) {
        setError(
          'Check-out time must be at least 2 hours after check-in time.',
        );
      } else {
        setError('');
      }
    }
  };

  return (
    <>
      {' '}
      <div className="mt-4 flex justify-center gap-6">
        <div className="flex w-[150px] flex-col gap-1">
          <label
            htmlFor="check-in"
            className="text-sm font-medium text-textColor"
          >
            Check-in
          </label>
          <input
            type="time"
            id="check-in"
            name="check-in"
            value={checkInTime}
            onChange={handleCheckInChange}
            className="rounded-lg border-none bg-gray p-3 text-textColor"
          />
        </div>

        <div className="flex w-[150px] flex-col gap-1">
          <label
            htmlFor="check-out"
            className="text-sm font-medium text-textColor"
          >
            Check-out
          </label>
          <input
            type="time"
            id="check-out"
            name="check-out"
            value={checkOutTime}
            onChange={handleCheckOutChange}
            className="rounded-lg border-none bg-gray p-3 text-textColor"
          />
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-[red]">{error}</p>}
    </>
  );
}

import { ChangeEvent, useState } from 'react';
import { useAddSpaceContext } from '../context/AddSpaceContext';

export default function AvailabilityTimePicker() {
  const [error, setError] = useState('');
  const { setAvailability } = useAddSpaceContext();
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');

  const handleopenChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newOpenTime = event.target.value;
    setOpenTime(newOpenTime);
    validateTimes(newOpenTime, closeTime);
    setAvailability((prevState) => {
      return { ...prevState, hours: { ...prevState.hours, open: newOpenTime } };
    });
  };

  const handlecloseChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCloseTime = event.target.value;
    setCloseTime(newCloseTime);
    validateTimes(openTime, newCloseTime);
    setAvailability((prevState) => {
      return {
        ...prevState,
        hours: { ...prevState.hours, close: newCloseTime },
      };
    });
  };

  const validateTimes = (start: string, end: string) => {
    if (start && end) {
      const startTime = new Date(`1970-01-01T${start}:00`);
      const endTime = new Date(`1970-01-01T${end}:00`);
      const timeDifference =
        (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

      if (timeDifference < 2) {
        setError('Closing time must be at least 2 hours after opening time.');
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
          <label htmlFor="open" className="text-sm font-medium text-textColor">
            Open
          </label>
          <input
            type="time"
            id="open"
            name="open"
            value={openTime}
            onChange={handleopenChange}
            className="rounded-lg border-none bg-gray p-3 text-textColor"
          />
        </div>

        <div className="flex w-[150px] flex-col gap-1">
          <label htmlFor="close" className="text-sm font-medium text-textColor">
            Close
          </label>
          <input
            type="time"
            id="close"
            name="close"
            value={closeTime}
            onChange={handlecloseChange}
            className="rounded-lg border-none bg-gray p-3 text-textColor"
          />
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-[red]">{error}</p>}
    </>
  );
}

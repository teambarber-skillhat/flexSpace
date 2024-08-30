import clsx from 'clsx';
import { useAddSpaceContext } from '../context/AddSpaceContext';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeekDaysCheckboxes() {
  const { availability, setAvailability } = useAddSpaceContext();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setAvailability((prevState) => ({
      ...prevState,
      days: checked
        ? [...prevState.days, value]
        : prevState.days.filter((day) => day !== value),
    }));
  };

  return (
    <div className="flex justify-center gap-7">
      {daysOfWeek.map((day) => (
        <label key={day} className="flex flex-col items-center gap-2">
          <p
            className={clsx(
              !availability.days.includes(day)
                ? 'text-[#838383]'
                : 'text-mainDarkColor',
              'text-xs font-semibold',
            )}
          >
            {day}
          </p>
          <input
            type="checkbox"
            value={day}
            checked={availability.days.includes(day)}
            onChange={handleCheckboxChange}
            className="h-6 w-6"
          />
        </label>
      ))}
    </div>
  );
}

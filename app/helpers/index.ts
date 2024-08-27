export function getTimeDifference(
  startTime: string,
  endTime: string,
): {
  start: string;
  end: string;
  diff: string;
} {
  function parseTime(timeStr: string): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return new Date(1970, 0, 1, hours, minutes);
  }

  function formatHours(hours: number): string {
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:00 ${period}`;
  }

  const startDate = parseTime(startTime);
  const endDate = parseTime(endTime);

  const differenceMs = endDate.getTime() - startDate.getTime();

  const differenceHours = differenceMs / (1000 * 60 * 60);
  const formattedHours = differenceHours.toFixed(1);

  const startHour = startDate.getHours();
  const endHour = endDate.getHours();
  const formattedStartTime = formatHours(startHour);
  const formattedEndTime = formatHours(endHour);

  return {
    start: formattedStartTime,
    end: formattedEndTime,
    diff: formattedHours,
  };
}

export function addHoursToDuration(duration: string): string {
  const durationHours = parseFloat(duration);

  if (durationHours === 1) {
    return '1 hour';
  }

  const formattedDuration =
    durationHours % 1 === 0
      ? `${Math.floor(durationHours)} hours`
      : `${durationHours.toFixed(1)} hours`;

  return formattedDuration;
}

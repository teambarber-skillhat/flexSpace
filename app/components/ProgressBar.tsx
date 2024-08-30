import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
}

export default function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div className="flex items-center gap-2 py-1.5">
      <div className="h-2.5 w-full overflow-hidden rounded-lg bg-gray">
        <div
          className="h-full bg-accentColor transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-center font-medium text-accentColor">
        {Math.round(percentage)}%
      </span>
    </div>
  );
}

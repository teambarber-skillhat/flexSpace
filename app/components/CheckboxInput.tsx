import React from 'react';

interface CheckboxInputProps {
  label: string;
  id: string;
  checked: boolean;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function CheckboxInput({
  label,
  id,
  checked,
  onInputChange,
}: CheckboxInputProps) {
  return (
    <label htmlFor={id} className="flex justify-between text-textColor">
      {label}
      <input
        type="checkbox"
        id={id}
        className="w-6"
        checked={checked}
        onChange={onInputChange}
      />
    </label>
  );
}

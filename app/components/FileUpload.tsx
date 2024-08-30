import React from 'react';

interface FileUploadProps {
  id: string;
  onFileChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  accept?: string;
  className?: string;
  multiple?: boolean;
}

export default function FileUpload({
  id,
  onFileChange,
  accept = '',
  className = '',
  label,
  multiple = false,
}: FileUploadProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <label className="block text-sm font-medium">
        {label}
        <span className="sr-only">Upload file</span>
        <input
          id={id}
          type="file"
          accept={accept}
          onChange={onFileChange}
          className="block w-full text-sm text-gray file:mt-2 file:rounded-lg file:border-gray file:bg-gray file:px-5 file:py-4 file:text-sm file:font-semibold file:text-mainDarkColor hover:file:bg-accentColor"
          multiple={multiple}
        />
      </label>
    </div>
  );
}

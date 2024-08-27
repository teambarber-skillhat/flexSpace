export default function InputField({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-xs font-medium text-[#585858]"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded border border-none bg-[#F2F2F2] px-4 py-2.5"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

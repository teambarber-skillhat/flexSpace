export default function TextArea({
  id,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <div className="mb-4">
      <textarea
        id={id}
        placeholder={placeholder}
        className="w-full rounded border border-none bg-[#F2F2F2] px-4 py-2.5"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

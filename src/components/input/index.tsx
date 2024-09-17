const Input = ({
	placeholder,
	type,
	value,
	onChange,
	pattern,
	required,
}: {
	placeholder: string;
	type: string;
	value: string;
	pattern?: string;
	required?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<input
			className="min-w-96 min-h-16 border rounded-lg border-[#D9D9D9] text-sm p-4 text-[#5A5A5A] placeholder:text-[#5A5A5A] focus:border-transparent focus:ring-0 focus:border-[#B0B0B0] focus:outline-none"
			placeholder={placeholder}
			type={type}
			value={value}
			pattern={pattern}
			onChange={onChange}
			required = {required}
		/>
	);
};

export default Input;

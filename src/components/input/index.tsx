const Input = ({
	placeholder,
	type,
}: {
	placeholder: string;
	type: string;
}) => {
	return (
		<input
			className="min-w-96 min-h-16 border rounded-lg border-[#D9D9D9] text-sm p-4 text-[#5A5A5A] placeholder:text-[#5A5A5A] focus:border-transparent focus:ring-0 focus:border-[#B0B0B0] focus:outline-none"
			placeholder={placeholder}
			type={type}
		/>
	);
};

export default Input;

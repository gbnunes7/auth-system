const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-[700px] w-4/5 bg-[#E5E5E5] shadow-xl shadow-[#B0B0B0] flex">
			{children}
		</div>
	);
};

export default Card;

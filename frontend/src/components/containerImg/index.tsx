const ContainerImg = ({ bgUrl }: { bgUrl:string }) => {
	return (
		<div className="md:w-3/4 bg-center bg-contain bg-cover" style={{ backgroundImage: `url(${bgUrl})` }}>
		</div>
	);
};

export default ContainerImg;

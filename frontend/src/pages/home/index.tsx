import { CiLogout } from "react-icons/ci";
import Title from "../../components/title";
import useForm from "../../hooks/useFormContext";

const Home = () => {
	const { user, onLogout } = useForm();

	return (
		<>
			<header className="w-full max-h-24 bg-[#E5E5E5] px-4 flex justify-between items-center">
				<img src="./authLogo.png" alt="Imagem da logo" className="w-32" />
				<button onClick={onLogout}>
					<CiLogout className="text-4xl" />
				</button>
			</header>
			<div className="flex justify-center items-center py-4 px-4">
				<Title>Congrats, {user} you're logged in</Title>
			</div>
		</>
	);
};

export default Home;

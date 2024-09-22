import useForm from "../../hooks/useFormContext";

const Private = ({ children }: { children: React.ReactNode }) => {
	const { navigate, isLogged } = useForm();

	if (!isLogged) {
		navigate("/");
	}

	return isLogged ? <>{children}</> : <>Please signin</>;
};

export default Private;

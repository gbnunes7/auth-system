import { createContext, useState } from "react";

interface FormContextProps {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	nome: string;
	setNome: React.Dispatch<React.SetStateAction<string>>;
	confirmPassword: string;
	setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
	error: string;
	setError: React.Dispatch<React.SetStateAction<string>>;
}

interface FormProviderProps {
	children: React.ReactNode;
}

export const FormContext = createContext<FormContextProps | null>(null);

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [nome, setNome] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	return (
		<FormContext.Provider
			value={{
				email,
				setEmail,
				password,
				setPassword,
				nome,
				setNome,
				confirmPassword,
				setConfirmPassword,
				error,
				setError,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;

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
	emailLogin: string;
	setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
	passwordLogin: string;
	setPasswordLogin: React.Dispatch<React.SetStateAction<string>>;
	errorLogin: string;
	setErrorLogin: React.Dispatch<React.SetStateAction<string>>;
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
	const [errorLogin, setErrorLogin] = useState<string>("");
	const [emailLogin, setEmailLogin] = useState<string>("");
	const [passwordLogin, setPasswordLogin] = useState<string>(""); 

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
				emailLogin,
				setEmailLogin,
				setPasswordLogin,
				passwordLogin,
				errorLogin,
				setErrorLogin
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;

import { useContext } from "react";
import { FormContext } from "../context/formContext";

const useForm = () => {
	const {
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
	} = useContext(FormContext)!;

	const onHandleSignup = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Suas senhas não coincidem!");
			return;
		}

		if(!nome || nome.length < 3 || nome.length > 30) {
			setError("Campo nome inválido.")
			return
		}

		console.log(password, nome, confirmPassword, email);
		clearForm();
	};

	function clearForm() {
		setNome("");
		setPassword("");
		setConfirmPassword("");
		setEmail("");
	}

	return {
		email,
		setEmail,
		password,
		setPassword,
		nome,
		setNome,
		confirmPassword,
		setConfirmPassword,
		onHandleSignup,
		error
	};
};

export default useForm;

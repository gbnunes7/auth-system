import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { useNavigate } from "react-router-dom";

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

	const navigate = useNavigate();

	const onHandleSignup = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Suas senhas não coincidem!");
			clearForm();
			return;
		}

		if (!nome || nome.length < 3 || nome.length > 30) {
			setError("Campo nome inválido.");
			clearForm();
			return;
		}

		console.log(password, nome, confirmPassword, email);
		clearForm();
		setError("Conta registrada com sucesso.");
		setTimeout(() => {
			navigate("/");
			setError("");
		}, 500);
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
		error,
	};
};

export default useForm;

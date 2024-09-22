import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

	const api_url = 'http://localhost:8080'

	const onHandleSignup = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Suas senhas não coincidem.");
			clearForm();
			return;
		}

		if (!nome || nome.length < 3 || nome.length > 30) {
			setError("Campo nome inválido.");
			clearForm();
			return;
		}

		const newUser = {
			nome: nome,
			password: password,
			email: email,
		};

		axios.post(api_url+ "/signup", newUser)

		clearForm();
		setError("Conta registrada com sucesso.");
		setTimeout(() => {
			navigate("/");
			setError("");
		}, 1000);
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

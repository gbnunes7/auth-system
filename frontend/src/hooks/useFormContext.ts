import { useContext} from "react";
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
		errorLogin,
		setErrorLogin,
		emailLogin,
		setEmailLogin,
		passwordLogin,
		setPasswordLogin,
		user,
		setUser,
		setIsLogged,
		isLogged
	} = useContext(FormContext)!;

	const navigate = useNavigate();

	const API_URL = "http://localhost:8080";
	
	const onHandleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
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

		try {
			await axios.post(`${API_URL}/signup`, newUser);
			setError("Conta registrada com sucesso.");
		} catch (err: any) {
			if (err.response) {
				setError(err.response.data.message); 
			} else {
				setError("Erro na requisição. Tente novamente mais tarde.");
			}
		}

		setTimeout(() => {
			clearForm();
			navigate("/");
			setError("");
		}, 500);
	};

	const onHandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const user = {
			email: emailLogin,
			password: passwordLogin,
		};

		try {
			const res = await axios.post(`${API_URL}/login`, user);
			localStorage.setItem("token", res.data.token);
			setIsLogged(true)
			navigate("/home")
			setUser(res.data.user.nome)
			clearForm()
		} catch (err: any) {
			if (err.response) {
				console.log(err.response.data.message);
				setErrorLogin(err.response.data.message);
			} else {
				console.log("Erro na requisição", err.message);
				setErrorLogin("Erro na requisição. Tente novamente mais tarde.");
			}
		}
	};

	function clearForm() {
		setNome("");
		setPassword("");
		setConfirmPassword("");
		setEmail("");
		setEmailLogin("");
		setPasswordLogin("");
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
		onHandleLogin,
		emailLogin,
		setEmailLogin,
		passwordLogin,
		setPasswordLogin,
		errorLogin,
		user,
		setUser,
		navigate,
		isLogged,
		setIsLogged
	};
};

export default useForm;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import FormProvider from "../context/formContext";
import Home from "../pages/home";
import Private from "../components/private";

function AppRoutes() {
	return (
		<BrowserRouter>
			<FormProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/home" element={<Private><Home /></Private>} />
				</Routes>
			</FormProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;

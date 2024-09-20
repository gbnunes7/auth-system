import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import FormProvider from "../context/formContext";

function AppRoutes() {
	return (
		<BrowserRouter>
			<FormProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</FormProvider>
		</BrowserRouter>
	);
}

export default AppRoutes;

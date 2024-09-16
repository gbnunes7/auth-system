import { Link } from "react-router-dom";
import Button from "../../components/button";
import Card from "../../components/card";
import ContainerForm from "../../components/containerForm";
import ContainerImg from "../../components/containerImg";
import Input from "../../components/input";
import Title from "../../components/title";

const Login = () => {
	return (
		<div className="min-h-screen min-w-screen flex justify-center items-center">
			<Card>
				<ContainerForm>
					<div className="h-0 bottom-[180px] right-[125px] relative">
						<img
							src="./authLogo.png"
							alt="Authentication Logo"
							className="w-[150px]"
						/>
					</div>
					<div className="flex flex-col max-w-[400px] max-h-[557px] items-center gap-2">
						<Title>Welcome Back</Title>
						<p className="text-lg">Login into your account</p>
						<form>
							<div className="flex flex-col gap-4 my-8">
								<Input placeholder="Email" type="text" />
								<Input placeholder="Password" type="password" />
								<div className="flex justify-between">
									<a href="" className="text-red-500 text-sm w-2/6">
										Recover Password
									</a>
									<p className="text-sm">
										Dont have an account? <span> </span>
										<Link to={'/signup'} className="text-blue-500">
											Sign Up!
										</Link>
									</p>
								</div>
							</div>
							<Button bgColor="transparent" fontColor="5A5A5A" type="submit">
								Login
							</Button>
						</form>
					</div>
				</ContainerForm>
				<ContainerImg bgUrl="./auth.png" />
			</Card>
		</div>
	);
};

export default Login;

import Button from "../../components/button";
import Card from "../../components/card";
import ContainerForm from "../../components/containerForm";
import ContainerImg from "../../components/containerImg";
import Input from "../../components/input";
import Title from "../../components/title";

const Signup = () => {
	return (
		<div className="min-h-screen min-w-screen flex justify-center items-center">
			<Card>
				<ContainerImg bgUrl="./auth.png" />
				<ContainerForm>
					<div className="flex flex-col max-w-[450px] max-h-[557px] items-center gap-2">
						<Title>Welcome to Auth System</Title>
						<p className="text-lg">Getting started is easy!</p>
						<form>
							<div className="flex flex-col gap-4 my-8">
								<Input placeholder="Full Name" type="text" />
								<Input placeholder="Enter Email" type="text" />
								<Input placeholder="Password" type="password" />
								<Input placeholder="Confirm Password" type="password" />
							</div>
							<Button bgColor="#3B82F6" fontColor="black" type="submit">
								Create Account
							</Button>
						</form>
						<p className="text-sm text-[#5A5A5A] mt-4">By continuing you indicate that you read and agreed to the Terms of Use</p>
					</div>
				</ContainerForm>
			</Card>
		</div>
	);
};

export default Signup;

"use client";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";

const ConnectBtn = () => {
	const { login, logout, isAuthenticated } = useAuth();

	return (
		<Button className="w-full sm:w-auto" onClick={isAuthenticated ? logout : login}>
			{isAuthenticated ? "Disconnect Wallet" : "Connect Wallet"}
		</Button>
	);
};

export default ConnectBtn;

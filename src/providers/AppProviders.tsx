"use client";
import { AuthProvider } from "@/context/AuthContext";
import { FC, ReactNode } from "react";
import AppServices from "./AppServices";
import { Toaster } from "react-hot-toast";

interface AppProvidersProps {
	children: ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
	return (
		<AuthProvider>
			{children}
			<AppServices />
			<Toaster />
		</AuthProvider>
	);
};

export default AppProviders;

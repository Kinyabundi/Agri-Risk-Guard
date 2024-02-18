import useAuthStateListener from "@/hooks/useAuthStateListener";
import { FC, ReactNode } from "react";

interface AppServicesProps {
	children?: ReactNode;
}

const AppServices: FC<AppServicesProps> = ({ children }) => {
	useAuthStateListener();
	return <>{children}</>;
};

export default AppServices;

import { FC, ReactNode } from "react";

interface AppProvidersProps {
	children: ReactNode;
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
	return <>{children}</>;
};

export default AppProviders;

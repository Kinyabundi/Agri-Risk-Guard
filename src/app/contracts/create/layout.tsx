import ConnectBtn from "@/components/btns/ConnectBtn";
import MainNav from "@/components/navigation/MainNav";
import NavItem from "@/components/navigation/NavItem";
import UserNav from "@/components/navigation/UserNav";
import { FC, ReactNode } from "react";

interface BuyerLayoutProps {
	children: ReactNode | ReactNode[];
}

const navItems = [
	<NavItem text="Dashboard" href="buyer" />
];

const BuyerLayout: FC<BuyerLayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<MainNav navItems={navItems} className="mx-6" />
					<div className="ml-auto flex items-center space-x-4">
						<ConnectBtn />
						<UserNav />
					</div>
				</div>
			</div>
			<div className="px-4 py-2">{children}</div>
		</div>
	);
};

export default BuyerLayout;

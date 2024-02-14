import MainNav from "@/components/navigation/MainNav";
import NavItem from "@/components/navigation/NavItem";
import UserNav from "@/components/navigation/UserNav";
import { FC, ReactNode } from "react";

interface BuyerLayoutProps {
	children: ReactNode | ReactNode[];
}

const navItems = [
	<NavItem text="Dashboard" href="buyer" />,
	<NavItem text="New Contract" href="buyer/new-contract" />,
	<NavItem text="My Contract" href="buyer/my-contracts" />,
	<NavItem text="Explore Marketplace" href="marketplace" />,
	<NavItem text="Profile" href="buyer/profile" />,
];

const BuyerLayout: FC<BuyerLayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<MainNav navItems={navItems} className="mx-6" />
					<div className="ml-auto flex items-center space-x-4">
						{/* <ConnectBtn /> */}
						<UserNav />
					</div>
				</div>
			</div>
			<div className="px-4 py-2">{children}</div>
		</div>
	);
};

export default BuyerLayout;

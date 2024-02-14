"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface MainNavProps extends HTMLAttributes<HTMLElement> {
	navItems: ReactNode | ReactNode[];
}

const MainNav = ({ navItems, className, ...props }: MainNavProps) => {
	return (
		<nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
			{navItems}
		</nav>
	);
};

export default MainNav;

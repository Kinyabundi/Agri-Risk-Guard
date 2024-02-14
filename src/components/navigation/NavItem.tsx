"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface NavItemProps {
	href: string;
	text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
	const pathname = usePathname();

	const selected = useMemo(() => {
		if (href && pathname !== "/") {
			return pathname === `/${href}` ? true : false;
		}

		return false;
	}, [href, pathname]);
	return (
		<Link href={href ? `/${href}` : "/"} className={cn("text-sm font-medium transition-colors hover:text-primary", selected ? "text-primary font-semibold" : "text-muted-foreground")}>
			{text}
		</Link>
	);
};

export default NavItem;

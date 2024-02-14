import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Lato } from "next/font/google";
import AppProviders from "@/providers/AppProviders";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
	children: Readonly<ReactNode>;
}

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	variable: "--font-lato",
});

export const metadata: Metadata = {
	title: {
		template: "%s - Agri-RiskGuard",
		default: "Agri-RiskGuard",
	},
	description: "A decentralized marketplace for trading futures and options contracts with ease and security.",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={lato.className}>
				<AppProviders>
					<div className={cn("min-h-screen bg-gray-100 font-lato antialiased", "transition-colors duration-200 ease-in-out", lato.variable)}>{children}</div>
				</AppProviders>
			</body>
		</html>
	);
}

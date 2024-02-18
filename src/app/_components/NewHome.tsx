"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import useAuthStore from "@/hooks/useAuthStore";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const NewHome = () => {
	const router = useRouter();
	const { login, logout, isAuthenticated } = useAuth();
	const { account } = useAuthStore();
	return (
		<section className="w-full min-h-screen bg-white dark:bg-gray-900">
			<div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
				<section className="flex items-center flex-1">
					<div className="flex flex-col w-full ">
						<h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
							<span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">Agri-</span>

							<span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">RiskGuard</span>
						</h1>

						<p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">Decentralized Agricultural Futures and Options MarketPlace on ICP.</p>

						<div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0 space-x-4">
							<Button className="w-full sm:w-auto" onClick={isAuthenticated ? logout : login}>
								{isAuthenticated ? "Disconnect Wallet" : "Connect Wallet"}
							</Button>
							<Button className="w-full sm:w-auto" onClick={() => router.push(account ? "/marketplace" : "/get-started")} variant="outline">
								{account ? "Dashboard" : "Get Started"} <ArrowRightIcon className="w-4 h-4 ml-2" />
							</Button>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default NewHome;

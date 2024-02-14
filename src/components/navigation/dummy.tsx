import Link from "next/link";
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CurrencyIcon, FastForwardIcon, GlobeIcon, LockIcon } from "../icons";

export default function DefaultHome() {
	return (
		<div className="flex flex-col min-h-[100vh]">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" href="#">
					<CurrencyIcon className="h-6 w-6" />
					<span className="sr-only">Decentralized Marketplace</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
						About
					</Link>
					<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
						Features
					</Link>
					<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
						Contracts
					</Link>
					<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Agri RiskGuard</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">A decentralized marketplace for trading futures and options contracts with ease and security.</p>
							</div>
							<div className="space-x-4">
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#">
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="flex items-center gap-2">
									<LockIcon className="h-6 w-6" />
									<h2 className="text-2xl font-bold">Secure</h2>
								</div>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Our marketplace is built on blockchain technology ensuring maximum security for your transactions.
								</p>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="flex items-center gap-2">
									<FastForwardIcon className="h-6 w-6" />
									<h2 className="text-2xl font-bold">Fast</h2>
								</div>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Experience fast and efficient trading with our optimized smart contracts.
								</p>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="flex items-center gap-2">
									<GlobeIcon className="h-6 w-6" />
									<h2 className="text-2xl font-bold">Global</h2>
								</div>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Trade with anyone, anywhere in the world. Our marketplace is accessible 24/7.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Contracts</h2>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Explore the latest futures and options contracts available in our marketplace.
								</p>
							</div>
						</div>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-8">
							<Card>
								<CardContent className="flex flex-col items-start space-y-2 p-4">
									<CardTitle>Contract 1</CardTitle>
									<CardDescription>This is a brief description of Contract 1.</CardDescription>
									<Button variant="outline">View Contract</Button>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-start space-y-2 p-4">
									<CardTitle>Contract 2</CardTitle>
									<CardDescription>This is a brief description of Contract 2.</CardDescription>
									<Button variant="outline">View Contract</Button>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-start space-y-2 p-4">
									<CardTitle>Contract 3</CardTitle>
									<CardDescription>This is a brief description of Contract 3.</CardDescription>
									<Button variant="outline">View Contract</Button>
								</CardContent>
							</Card>
						</div>
						<div className="flex justify-center mt-8">
							<Button variant="outline">View More Contracts</Button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

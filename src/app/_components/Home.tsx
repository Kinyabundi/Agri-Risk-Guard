import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-col min-h-[100vh]">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" href="#">
					<StoreIcon className="h-6 w-6" />
					<span className="sr-only">Agri RiskGuard</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
						About
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
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Welcome to Agri RiskGuard</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Explore our decentralized marketplace for futures and options contracts.</p>
							</div>
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="/get-started">
								Get Started
							</Link>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Decentralized Trading?</h2>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Experience the benefits of transparency, security, and accessibility in trading.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
							<div className="flex flex-col items-center text-center">
								<AccessibilityIcon className="h-12 w-12 mb-4" />
								<h3 className="text-2xl font-semibold mb-2">Transparency</h3>
								<p className="text-gray-500 dark:text-gray-400">All transactions are transparent and can be audited by anyone.</p>
							</div>
							<div className="flex flex-col items-center text-center">
								<LockIcon className="h-12 w-12 mb-4" />
								<h3 className="text-2xl font-semibold mb-2">Security</h3>
								<p className="text-gray-500 dark:text-gray-400">Our platform is built on blockchain technology ensuring top-notch security.</p>
							</div>
							<div className="flex flex-col items-center text-center">
								<AccessibilityIcon className="h-12 w-12 mb-4" />
								<h3 className="text-2xl font-semibold mb-2">Accessibility</h3>
								<p className="text-gray-500 dark:text-gray-400">Trade from anywhere, anytime. No restrictions.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Available Contracts</h2>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Explore a wide variety of futures and options contracts.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
							<Card>
								<CardContent className="flex flex-col items-center text-center p-4">
									<ForwardIcon className="h-12 w-12 mb-4" />
									<h3 className="text-2xl font-semibold mb-2">Futures Contracts</h3>
									<p className="text-gray-500 dark:text-gray-400">Trade futures contracts with ease and security.</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center text-center p-4">
									<OptionIcon className="h-12 w-12 mb-4" />
									<h3 className="text-2xl font-semibold mb-2">Options Contracts</h3>
									<p className="text-gray-500 dark:text-gray-400">Explore a wide variety of options contracts.</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center text-center p-4">
									<UserIcon className="h-12 w-12 mb-4" />
									<h3 className="text-2xl font-semibold mb-2">Custom Contracts</h3>
									<p className="text-gray-500 dark:text-gray-400">Create your own custom contracts.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Agri RiskGuard. All rights reserved.</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}

function AccessibilityIcon(props: any) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="16" cy="4" r="1" />
			<path d="m18 19 1-7-6 1" />
			<path d="m5 8 3-3 5.5 3-2.36 3.5" />
			<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
			<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
		</svg>
	);
}

function ForwardIcon(props: any) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<polyline points="15 17 20 12 15 7" />
			<path d="M4 18v-2a4 4 0 0 1 4-4h12" />
		</svg>
	);
}

function LockIcon(props: any) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	);
}

function OptionIcon(props: any) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 3h6l6 18h6" />
			<path d="M14 3h7" />
		</svg>
	);
}

function StoreIcon(props: any) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
			<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
			<path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
			<path d="M2 7h20" />
			<path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
		</svg>
	);
}

function UserIcon(props: any) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-screen bg-green-50 dark:bg-green-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">Page Not Found</h2>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We're sorry, but the page you are looking for does not exist. Please check the URL or return to the homepage.</p>
				</div>
				<div className="mt-6 flex justify-center">
					<Link
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
						href="/">
						Return to Homepage
					</Link>
				</div>
			</div>
		</main>
	);
}

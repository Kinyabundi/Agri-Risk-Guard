import { FC, ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

const GetStartedWrapper: FC<IProps> = ({ children }) => {
	return (
		<div className="w-full flex">
			<Illustration />
			<div className="flex-1  h-screen  overflow-y-auto">
				<div className="h-[80% w-full flex items-center justify-center overflow-y-auto">
					<div className="w-full max-w-lg bg-white text-gray-600 rounded-lg px-6 py-6">
						<div className="">
							<img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" />
							<div className="mt-5 space-y-2">
								<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Setup Account</h3>
								{/* <ConnectBtn /> */}
								<p className="">
									<a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
										Back to HomePage
									</a>
								</p>
							</div>
						</div>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetStartedWrapper;

const Illustration = () => {
	return (
		<div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
			<div className="relative z-10 w-full max-w-md">
				<div className=" mt-16 space-y-3">
					<h3 className="text-white text-3xl font-bold">Agri RiskGuard</h3>
					<p className="text-gray-300">Setup your account to start exploring decentralized marketplace for futures and options contracts.</p>
					<div className="flex items-center -space-x-2 overflow-hidden">
						<img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
						<img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
						<img
							src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
							className="w-10 h-10 rounded-full border-2 border-white"
						/>
						<img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
						<img
							src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
							className="w-10 h-10 rounded-full border-2 border-white"
						/>
						<p className="text-sm text-gray-400 font-medium translate-x-5">Join 5.000+ users</p>
					</div>
				</div>
			</div>
			<div
				className="absolute inset-0 my-auto h-[500px]"
				style={{
					background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
					filter: "blur(118px)",
				}}></div>
		</div>
	);
};

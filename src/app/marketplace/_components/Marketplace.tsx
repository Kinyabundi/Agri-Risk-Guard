"use client";

import useAuthStore from "@/hooks/useAuthStore";

const Marketplace = () => {
	const { account } = useAuthStore();

	console.log(account);
	return <div>Marketplace</div>;
};

export default Marketplace;

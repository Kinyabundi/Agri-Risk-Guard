"use client";
import { useAuth } from "@/context/AuthContext";
import { futures_contract } from "@/declarations/futures_contract";
import useAuthStore from "@/hooks/useAuthStore";
import { Principal } from "@dfinity/principal";
import { FC, ReactNode, useEffect } from "react";

interface AppServicesProps {
	children?: ReactNode;
}

const AppServices: FC<AppServicesProps> = ({ children }) => {
	const { identifier } = useAuth();
	const { setAccount } = useAuthStore();

	useEffect(() => {
		async function fetchAccount() {
			if (!futures_contract || !identifier) return;

			console.log(futures_contract);

			const farmer = await futures_contract.get_farmer_by_identifier(identifier);
			const buyer = await futures_contract.get_buyer_by_identifier(identifier);

			console.log(farmer, "farmer");
			console.log(buyer, "buyer");

			if (farmer?.["Err"] && buyer?.["Err"]) {
				console.log("both are null");
				setAccount(null);
				return;
			}

			const farmerWithOk = farmer?.["Ok"];
			const farmerWithErr = farmer?.["Err"];
			// check if both are null
			if (farmerWithOk) {
				console.log(farmerWithOk, "farmerWithOk");
				setAccount({ ...farmerWithOk, accountType: "farmer" });
				return;
			}

			const buyerWithOk = buyer?.["Ok"];
			const buyerWithErr = buyer?.["Err"];
			
			if (buyerWithOk) {
				console.log(buyerWithOk, "buyerWithOk");
				setAccount({ ...buyerWithOk, accountType: "buyer" });
				return;
			}
		}

		fetchAccount();
	}, [identifier, futures_contract]);
	return <>{children}</>;
};

export default AppServices;

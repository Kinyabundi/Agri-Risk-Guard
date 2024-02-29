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

			if (farmer?.["Err"] && buyer?.["Err"]) {
				setAccount(null);
				return;
			}

			// check if both are null
			if (farmer) {
				// extract the farmer object
				const farmerWithOk = farmer?.["Ok"];
				const farmerWithErr = farmer?.["Err"];

				if (farmerWithOk) {
					setAccount({ ...farmerWithOk, accountType: "farmer" });
					return;
				}
				if (farmerWithErr) {
					setAccount(null);
					return;
				}
			}
			if (buyer) {
				const buyerWithOk = buyer?.["Ok"];
				const buyerWithErr = buyer?.["Err"];

				if (buyerWithOk) {
					setAccount({ ...buyerWithOk, accountType: "buyer" });
					return;
				}
				if (buyerWithErr) {
					setAccount(null);
					return;
				}
			}
		}

		fetchAccount();
	}, [identifier, futures_contract]);
	return <>{children}</>;
};

export default AppServices;

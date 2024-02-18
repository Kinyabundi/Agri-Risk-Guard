import { useAuth } from "@/context/AuthContext";
import useAuthStore from "./useAuthStore";
import { useEffect } from "react";
import { futures_contract } from "@/declarations/futures_contract";

import { Principal } from "@dfinity/principal";

const useAuthStateListener = () => {
	const { principal } = useAuth();
	const { setAccount } = useAuthStore();

	useEffect(() => {
		async function fetchAccount() {
			if (!futures_contract || !principal) return;

			console.log(futures_contract);

			const principalItem = await futures_contract.get_principal();
			const principalObj = Principal.fromText(principalItem.toText());
			const farmer = await futures_contract.get_farmer_by_principal(principalObj);
			const buyer = await futures_contract.get_buyer_by_principal(principalObj);

			if (!farmer && !buyer) {
				setAccount(null);
				return;
			}

			// check if both are null
			if (farmer) {
				// @ts-expect-error
				setAccount({ ...farmer, accountType: "farmer" });
				return;
			}
			if (buyer) {
				// @ts-expect-error
				setAccount({ ...buyer, accountType: "buyer" });
				return;
			}
		}

		fetchAccount();
	}, [principal, futures_contract]);
};

export default useAuthStateListener;

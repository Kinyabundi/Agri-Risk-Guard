import { useAuth } from "@/context/AuthContext";
import useAuthStore from "./useAuthStore";
import { useEffect } from "react";
import { futures_backend } from "../declarations/futures_contract";
import { Principal } from "@dfinity/principal";

const useAuthStateListener = () => {
	const { principal } = useAuth();
	const { setAccount } = useAuthStore();

	useEffect(() => {
		async function fetchAccount() {
			if (!futures_backend || !principal) return;

			console.log(futures_backend);

			const principalItem = await futures_backend.get_principal();
			const principalObj = Principal.fromText(principalItem.toText());
			const farmer = await futures_backend.get_farmer_by_principal(principalObj);
			const buyer = await futures_backend.get_buyer_by_principal(principalObj);

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
	}, [principal, futures_backend]);
};

export default useAuthStateListener;

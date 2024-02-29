import { useAuth } from "@/context/AuthContext";
import useAuthStore from "./useAuthStore";
import { useEffect } from "react";
import { futures_contract } from "../declarations/futures_contract/index.d";
import { Principal } from "@dfinity/principal";


const useAuthStateListener = () => {
	const { identifier } = useAuth();
	const { setAccount, account } = useAuthStore();

	useEffect(() => {
		async function fetchAccount() {
			if (!futures_contract || !identifier) return;
		    console.log(futures_contract);
			
			console.log("Identifer", identifier);
			const farmer = await futures_contract.get_farmer_by_identifier(identifier);
			const buyer = await futures_contract.get_buyer_by_identifier(identifier);

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
	}, [ identifier, futures_contract]);

	console.log(account);
};

export default useAuthStateListener;

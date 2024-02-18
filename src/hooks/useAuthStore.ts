import { Account } from "@/types/Account";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
	account: Account | null;
	setAccount: (account: Account | null) => void;
	getAccount: () => Account | null;
	resetAccount: () => void;
}

const useAuthStore = create(
	persist<IAuthStore>(
		(set, get) => ({
			account: null,
			setAccount: (account: Account | null) => set({ account }),
			getAccount: () => get().account,
			resetAccount: () => set({ account: null }),
		}),
		{ name: "agri-risk-guard-store", storage: createJSONStorage(() => localStorage) }
	)
);

export default useAuthStore;

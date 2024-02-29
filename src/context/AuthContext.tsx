import { AuthClient } from "@dfinity/auth-client";
import { futures_contract } from "@/declarations/futures_contract";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { canisterId, createActor } from "@/declarations/futures_contract";
import useAuthStore from "@/hooks/useAuthStore";
import { HttpAgent } from "@dfinity/agent";


interface AuthProviderProps {
	children: ReactNode;
}

interface AuthContextProps {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
	authClient: AuthClient | null;
	identity: any;
	principal: any;
	whoamiActor: any;
	identifier: any;
}

const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: false,
	login: () => { },
	logout: () => { },
	authClient: null,
	identity: null,
	principal: null,
	whoamiActor: null,
	identifier: null,
});

const defaultOptions = {
	/**
	 *  @type {import("@dfinity/auth-client").AuthClientCreateOptions}
	 */
	createOptions: {
		idleOptions: {
			// Set to true if you do not want idle functionality
			disableIdle: true,
		},
	},
	/**
	 * @type {import("@dfinity/auth-client").AuthClientLoginOptions}
	 */
	loginOptions: {
		identityProvider: "https://identity.ic0.app/#authorize",
	},
};

/**
 *
 * @param options - Options for the AuthClient
 * @param {AuthClientCreateOptions} options.createOptions - Options for the AuthClient.create() method
 * @param {AuthClientLoginOptions} options.loginOptions - Options for the AuthClient.login() method
 * @returns
 */
export const useAuthClient = (options = defaultOptions) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [authClient, setAuthClient] = useState<AuthClient | null>(null);
	const [identity, setIdentity] = useState<any>(null);
	const [principal, setPrincipal] = useState<any>(null);
	const [whoamiActor, setWhoamiActor] = useState<any>(null);
	const [identifier, setIdentifier] = useState<any>(null);
	const { resetAccount } = useAuthStore();

	useEffect(() => {
		// Initialize AuthClient
		AuthClient.create(options.createOptions).then(async (client) => {
			updateClient(client);
		});
	}, []);

	const login = () => {
		authClient?.login?.({
			...options.loginOptions,
			onSuccess: async () => {
				// Get the identity of the current user
				const identity = authClient.getIdentity();
				console.log("This is the identity", identity);

				const agent = new HttpAgent({ identity });
				const principal = identity.getPrincipal();
				console.log("This is the principal", principal);

				const identifier = principal.toText();
				console.log("This is the identifier", identifier);
				const farmer = await futures_contract.get_farmer_by_identifier(identifier);
				// const farmer = await futures_contract.get_farmer_by_principal(principal);
				console.log("farmer", farmer);

				const farmers = await futures_contract.get_all_farmers();
				console.log("farmers", farmers);

				const buyer = await futures_contract.get_buyer_by_identifier(identifier);
				console.log("buyer", buyer);

				updateClient(authClient);
			},
		});
	};

	async function updateClient(client: AuthClient) {
		const isAuthenticated = await client.isAuthenticated();
		setIsAuthenticated(isAuthenticated);

		const identity = client.getIdentity();
		setIdentity(identity);

		const principal = identity.getPrincipal();
		// setPrincipal(principal);

		const identifier = principal.toText();
		setIdentifier(identifier);

		const agent = new HttpAgent({ identity });

		setAuthClient(client);

		const actor = createActor(canisterId, {
			agentOptions: {
				identity,
			},
		});

		setWhoamiActor(actor);
	}

	async function logout() {
		await authClient?.logout();
		resetAccount();
		await updateClient(authClient as AuthClient);
	}

	return {
		isAuthenticated,
		login,
		logout,
		authClient,
		identity,
		principal,
		whoamiActor,
		identifier,
	};
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const auth = useAuthClient();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

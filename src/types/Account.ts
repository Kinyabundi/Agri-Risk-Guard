import { Principal } from "@dfinity/principal";

export interface IFarmer {
	name: string;
	location: string;
	email?: string;
	croptypes: string[];
	phone_number: string;
	national_id: string;
	size_of_land: string;
	principal: Principal;
	id: number;
	identifier: string;
}

export interface IBuyer {
	name: string;
	location: string;
	email: string;
	phone_number: string;
	organization: string;
	principal: Principal;
	id: number;
	identifier: string;
}

export type AccountType = "farmer" | "buyer";

interface IAccount {
	accountType: AccountType;
}

export type Account = (IAccount & IFarmer) | (IAccount & IBuyer);

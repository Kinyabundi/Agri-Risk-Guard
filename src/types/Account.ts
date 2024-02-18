export interface IFarmer {
	name: string;
	location: string;
	email?: string;
	croptypes: string[];
	phone_number: string;
	national_id: string;
	size_of_land: string;
	principal: string;
	id: number;
}

export interface IBuyer {
	name: string;
	location: string;
	email: string;
	phone_number: string;
	organization: string;
	principal: string;
	id: number;
}

export type AccountType = "farmer" | "buyer";

interface IAccount {
	accountType: AccountType;
}

export type Account = (IAccount & IFarmer) | (IAccount & IBuyer);

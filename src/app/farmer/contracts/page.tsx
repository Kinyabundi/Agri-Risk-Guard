import { Metadata } from "next";
import MyContracts from "../_components/MyContracts";


export const metadata: Metadata = {
	title: "My Contracts",
};

const page = () => {
	return <MyContracts />;
};

export default page;

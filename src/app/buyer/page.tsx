"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IContract } from "@/types/Contract";
import { useState, useEffect } from "react";
import { futures_contract } from "@/declarations/futures_contract";
import useAuthStore from "@/hooks/useAuthStore";

interface CardItemProps {
	item: IContract;
}

const MyContracts = () => {
	const [contracts, setContracts] = useState<IContract[]>([]);
	const { account } = useAuthStore();

	const fetchAllContracts = async () => {
		try {
			const allContracts = await futures_contract.get_contracts_by_buyer(account?.identifier as string);
			if (allContracts) {
				setContracts(allContracts as unknown as IContract[]);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchAllContracts();
	}, [account]);

	return (
        <div>
            <h1>
                <span className="text-3xl font-semibold text-gray-800">My Contracts</span>
            </h1>
            {contracts?.length ===  0 && <p className="my-4">No contracts available</p>}
            {contracts?.length >  0 && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-6">
                    {contracts
                        .filter(contract => contract.contract_status.inprogress)
                        .map(contract => (
                            <CardItem item={contract} />
                        ))}
                </div>
            )}
        </div>
    );
};

const CardItem = ({ item }: CardItemProps) => {
	// extract contract_status from item in Object
	const { contract_status } = item;
	const currentStatus = Object.keys(contract_status)?.[0];

	return (
		<Card>
			<CardHeader>
				<CardTitle>
					{" "}
					{item?.crop} Futures Contract
					<span>
						<Badge color="success" className="ml-2">
							{currentStatus}
						</Badge>
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="font-semibold">
					Terms and Conditions: <span className="text-gray-600 font-normal">{item?.terms_and_conditions}</span>
				</div>
				<div className="font-semibold">
					Expected month of Delivery: <span className="text-gray-600 font-normal">{item?.expected_month_of_harvest}</span>
				</div>
				<div className="font-semibold">
					Price per unit: <span className="text-gray-600 font-normal">{Number(item?.price_per_unit)}</span>
				</div>
				<div className="font-semibold">
					Expected yield(Kgs): <span className="text-gray-600 font-normal">{Number(item?.expected_yield)}</span>
				</div>
			</CardContent>
		</Card>
	);
};

export default MyContracts;

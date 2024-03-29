"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useAuthStore from "@/hooks/useAuthStore";
import { useState, useEffect } from "react";
import { futures_contract } from "@/declarations/futures_contract";
import { IContract } from "@/types/Contract";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ClaimShortPositionModal from "@/components/modals/ClaimShortPositionModal";
import ClaimLongPositionModal from "@/components/modals/ClaimLongPositionModal";

interface CardItemProps {
	item: IContract;
	refresh?: () => void;
}

const Marketplace = () => {
	const { account } = useAuthStore();
	const [contracts, setContracts] = useState<IContract[]>([]);

	const fetchAllContracts = async () => {
		try {
			const allContracts = await futures_contract.get_all_future_contracts();
			if (allContracts) {
				// show only that are either created or pending
				const filteredContracts = allContracts.filter((contract) => {
					const currentStatus = Object.keys(contract.contract_status)?.[0];
					return currentStatus === "Created" || currentStatus === "Pending";
				});
				setContracts(filteredContracts as unknown as IContract[]);
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
			<h1>Explore the Futures and Options Marketplace</h1>
			{contracts?.length === 0 && <p className="my-4">No contracts available</p>}
			{contracts?.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
					{contracts.map((contract) => (
						<CardItem item={contract} refresh={fetchAllContracts} />
					))}
				</div>
			)}
		</div>
	);
};

const CardItem = ({ item, refresh }: CardItemProps) => {
	// extract contract_status from item in Object
	const { contract_status } = item;
	const currentStatus = Object.keys(contract_status)?.[0];
	const { account } = useAuthStore();

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
			<CardFooter className="flex items-center space-x-2">
				{currentStatus === "Created" && account?.accountType === "farmer" && (
					<>
						<ClaimShortPositionModal contractInfo={item} refresh={refresh} />
						<ClaimLongPositionModal contractInfo={item} refresh={refresh} />
					</>
				)}
				{currentStatus === "Pending" && <ClaimLongPositionModal contractInfo={item} refresh={refresh} />}
			</CardFooter>
		</Card>
	);
};

export default Marketplace;

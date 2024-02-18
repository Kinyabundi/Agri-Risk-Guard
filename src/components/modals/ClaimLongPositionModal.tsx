import CustomTextArea from "../app-forms/custom-textarea";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogFooter } from "../ui/dialog";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Principal } from "@dfinity/principal";
import { futures_contract } from "@/declarations/futures_contract";
import { IContract } from "@/types/Contract";

interface ClaimLongPositionModalProps {
	contractInfo: IContract;
	refresh?: () => void;
}

const ClaimLongPositionModal = ({ contractInfo, refresh }: ClaimLongPositionModalProps) => {
	const [open, setOpen] = useState(false);
	const [bargainingPosition, setBargainingPosition] = useState("");
	const [loading, setLoading] = useState(false);

	const onClaim = async () => {
		const id = toast.loading("Claiming short position...");
		setLoading(true);

		try {
			const trfPrincipal = Principal.fromText("od76w-ml76j-qr6fr-iusqv-bdost-ef44w-rzofd-73hsr-rkhy7-a4t6j-eqe");
			// @ts-ignore
			const result = await futures_contract.claim_long_position(contractInfo.id as unknown as bigint, bargainingPosition ? [bargainingPosition] : [], trfPrincipal);
			console.log("result", result);

			if (result) {
				toast.success("Short position claimed successfully", { id });
			} else {
				toast.error("Failed to claim short position", { id });
			}
			setOpen(false);
			refresh && refresh?.();
		} catch (error) {
			console.error(error);
			toast.error("Failed to claim short position", { id });
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Button size="sm" onClick={() => setOpen(true)}> Claim Long Position</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Claim Long Position</DialogTitle>
						<DialogDescription>Enter your bargaining position to claim the long position</DialogDescription>
					</DialogHeader>
					<div className="">
						<CustomTextArea label="Bargaining Position" placeholder="Enter your bargaining position" value={bargainingPosition} onChange={(e) => setBargainingPosition(e.target.value)} />
					</div>
					<DialogFooter>
						<Button onClick={() => setOpen(false)} variant="destructive">
							Cancel
						</Button>
						<Button disabled={loading || !bargainingPosition} onClick={onClaim}>
							Claim Long Position
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ClaimLongPositionModal;

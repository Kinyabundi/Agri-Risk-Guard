"use client";
import GetStartedWrapper from "./GetStartedWrapper";
import Stepper, { StepItem } from "@/components/stepper";
import useSteps from "@/hooks/useSteps";
import { Button } from "@/components/ui/button";
import { AccountType } from "@/types/Account";
import { useState } from "react";
import OnboardBuyer from "./OnboardBuyer";
import OnboardFarmer from "./OnboardFarmer";

const steps: StepItem[] = [
	{
		title: "Account Type",
	},
	{
		title: "Create Account",
	},
];

const GetStarted = () => {
	const { activeStep, goToNextStep, goToPreviousStep } = useSteps({
		initialStep: 0,
		count: steps.length,
	});
	const [accountType, setAccountType] = useState<AccountType>("buyer");

	return (
		<GetStartedWrapper>
			<Stepper steps={steps} index={activeStep} />
			<div className="px-1 pt-8">
				{activeStep === 0 && (
					<div className="flex flex-col space-y-10">
						<h3 className="text-3xl font-medium">Are you a buyer or a seller</h3>
						<div className="flex items-center justify-between">
							<Button
								className="rounded-r-full rounded-bl-full"
								onClick={() => {
									setAccountType("buyer");
									goToNextStep();
								}}>
								Am a Buyer
							</Button>
							<Button
								variant="outline"
								className="rounded-r-full rounded-bl-full"
								onClick={() => {
									setAccountType("farmer");
									goToNextStep();
								}}>
								Am a Seller / Farmer
							</Button>
						</div>
					</div>
				)}
				{activeStep === 1 && accountType === "buyer" && <OnboardBuyer goToPreviousStep={goToPreviousStep} />}
				{activeStep === 1 && accountType === "farmer" && <OnboardFarmer goToPreviousStep={goToPreviousStep} />}
			</div>
		</GetStartedWrapper>
	);
};

export default GetStarted;

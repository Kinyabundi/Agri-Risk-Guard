"use client";
import { AppInput } from "@/components/app-forms";
import GetStartedWrapper from "./GetStartedWrapper";
import Stepper, { StepItem } from "@/components/stepper";
import useSteps from "@/hooks/useSteps";
import { Button } from "@/components/ui/button";

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

	return (
		<GetStartedWrapper>
			<Stepper steps={steps} index={activeStep} />
			<div className="px-1 pt-8">
				{activeStep === 0 && (
					<div className="flex flex-col space-y-10">
						<h3 className="text-3xl font-medium">Are you a buyer or a seller</h3>
						<div className="flex items-center justify-between">
							<Button className="rounded-r-full rounded-bl-full" onClick={goToNextStep}>
								Am a Buyer
							</Button>
							<Button variant="outline" className="rounded-r-full rounded-bl-full" onClick={goToNextStep}>
								Am a Seller / Farmer
							</Button>
						</div>
					</div>
				)}
				{activeStep === 1 && (
					<>
						<div className="space-y-3">
							<AppInput label="Name" name="name" placeholder="e.g. John Legend" className="focus:border-none" />
							<AppInput label="Email" name="email" placeholder="e.g. john.legend@gmail.com" />
							<AppInput label="Phone No" name="phoneNo" placeholder="e.g. 0700123455" />
							<AppInput label="Business" name="business" placeholder="e.g. Indiana Supplies" />
							<AppInput label="Where are you located?" name="location" placeholder="e.g. Nairobi" />
							<AppInput label="Where are you located?" name="location" placeholder="e.g. Nairobi" />
							<AppInput label="Where are you located?" name="location" placeholder="e.g. Nairobi" />
							<AppInput label="Where are you located?" name="location" placeholder="e.g. Nairobi" />
						</div>
						<div className="flex items-center justify-between">
							<Button variant="outline" className="rounded-r-full rounded-bl-full" onClick={goToPreviousStep}>
								Back
							</Button>
							<Button className="rounded-r-full rounded-bl-full">Submit</Button>
						</div>
					</>
				)}
			</div>
		</GetStartedWrapper>
	);
};

export default GetStarted;

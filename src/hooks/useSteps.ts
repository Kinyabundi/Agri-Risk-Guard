import { StepStatus } from "@/context/StepperContext";
import { useState } from "react";

interface UseStepsProps {
	initialStep?: number;
	count?: number;
}

const useSteps = (props: UseStepsProps = {}) => {
	const { initialStep = 0, count } = props;
	const [activeStep, setActiveStep] = useState(initialStep || 0);

	return {
		activeStep,
		setActiveStep,
		isActiveStep: (step: number) => activeStep === step,
		isCompleteStep: (step: number) => step < activeStep,
		isIncompleteStep: (step: number) => step > activeStep,
		getStepStatus: (step: number): StepStatus => {
			if (step < activeStep) return "complete";
			if (step > activeStep) return "incomplete";
			return "active";
		},
		goToNextStep: () => {
			setActiveStep((step) => {
				return typeof count === "number" ? Math.min(count, step + 1) : step + 1;
			});
		},
		goToPreviousStep: () => {
			setActiveStep((step) => Math.max(0, step - 1));
		},
	};
};

export default useSteps;

import { FormProvider, useForm } from "react-hook-form";
import { InferType, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppInput } from "@/components/app-forms";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { futures_contract } from "@/declarations/futures_contract";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface OnboardBuyerProps {
	goToPreviousStep: () => void;
}

const formSchema = object({
	name: string().required("Name is required"),
	email: string().email("Invalid email").required("Email is required"),
	phone_number: string().required("Phone number is required"),
	organization: string(),
	location: string().required("Location is required"),
});

const OnboardBuyer = ({ goToPreviousStep }: OnboardBuyerProps) => {
	const formMethods = useForm({ resolver: yupResolver(formSchema) });
	const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

	const { handleSubmit, reset, control } = formMethods;

	const onSubmit = async (data: InferType<typeof formSchema>) => {
		const payload = {
			name: data.name,
			email: [data.email],
			phone_number: data.phone_number,
			organization: data?.organization ? [data?.organization] : [],
			location: data.location,
		};
		const id = toast.loading("Creating account...");
		setLoading(true);

		try {
			const newAccount = await futures_contract.add_buyer(payload as any);
			console.log(newAccount);
			toast.success("Account created successfully", { id });
			reset();
            router.push("/buyer");
		} catch (err) {
			console.error(err);
			toast.error("An error occurred. Please try again", { id });
		} finally {
			setLoading(false);
		}
	};
	return (
		<FormProvider {...formMethods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-3">
					<AppInput label="Name" name="name" placeholder="e.g. John Legend" className="focus:border-none" control={control} />
					<AppInput label="Email" name="email" placeholder="e.g. john.legend@gmail.com" control={control} />
					<AppInput label="Phone No" name="phone_number" placeholder="e.g. 0700123455" control={control} />
					<AppInput label="Business" name="organization" placeholder="e.g. Indiana Supplies" control={control} />
					<AppInput label="Where are you located?" name="location" placeholder="e.g. Nairobi" control={control} />
				</div>
				<div className="flex items-center justify-between">
					<Button variant="outline" className="rounded-r-full rounded-bl-full" onClick={goToPreviousStep} type="button">
						Back
					</Button>
					<Button className="rounded-r-full rounded-bl-full" type="submit" disabled={loading}>
						{loading && <Loader2 className="animate-spin" size={20} />}
						{loading ? "Creating account..." : "Submit"}
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default OnboardBuyer;

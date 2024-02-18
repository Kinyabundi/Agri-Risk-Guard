"use client";
import { AppInput } from "@/components/app-forms";
import { Button } from "@/components/ui/button";
import { object, string, number, InferType } from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { futures_contract } from "@/declarations/futures_contract";
import { Loader2 } from "lucide-react";

const formSchema = object({
	terms_and_conditions: string().required(),
	expected_month_of_harvest: string().required(),
	price_per_unit: number().required(),
	crop: string().required(),
	expected_yield: number().required(),
});

const CreateContract = () => {
	const formMethods = useForm({ resolver: yupResolver(formSchema) });
	const { handleSubmit, control, reset } = formMethods;
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = async (data: InferType<typeof formSchema>) => {
		const payload = {
			...data,
			expected_yield: parseInt(String(data.expected_yield)),
			price_per_unit: parseInt(String(data.price_per_unit)),
		};

		const id = toast.loading("Creating Contract");
		setLoading(true);

		try {
			const createdContract = await futures_contract.create_future_contract(payload as any);
			console.log(createdContract);
			toast.success("Contract Created", { id });
			reset();
		} catch (error) {
			toast.error("Error Creating Contract", { id });
		} finally {
			setLoading(false);
		}
	};

	return (
		<FormProvider {...formMethods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex items-center justify-center">
					<div className="w-full max-w-lg">
						<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<AppInput label="Terms & Conditions" name="terms_and_conditions"placeholder="Minimum produce is 100 kgs" control={control} />
							<AppInput label="Expected Month of Delivery" name="expected_month_of_harvest" placeholder="May 2024" control={control} />
							<AppInput label="Price Per Kg in Ksh" name="price_per_unit" placeholder="120" control={control} />
							<AppInput label="Produce to be delivered" name="crop"   placeholder="Maize" control={control} />
							<AppInput label="Expected Quantity in Kg" name="expected_yield" placeholder="100" control={control} />
							<Button type="submit">
								{loading ? "Creating Contract" : "Create Contract"}
								{loading && <Loader2 className="animate-spin ml-2" />}
							</Button>
						</div>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default CreateContract;

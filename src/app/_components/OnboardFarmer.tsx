import { AppInput } from "@/components/app-forms";
import { Button } from "@/components/ui/button";
import { futures_backend } from "@/declarations/futures_backend";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { InferType, number, object, string } from "yup";

interface OnboardFarmerProps {
	goToPreviousStep: () => void;
}

const formSchema = object({
	name: string().required("Name is required"),
	email: string().email("Invalid email"),
	phone_number: string().required("Phone number is required"),
	national_id: string().required("National ID is required"),
	croptypes: string().required("Crop types are required"),
	size_of_land: number().required("Size of land is required"),
	location: string().required("Location is required"),
});

const OnboardFarmer = ({ goToPreviousStep }: OnboardFarmerProps) => {
	const formMethods = useForm({ resolver: yupResolver(formSchema) });
	const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

	const { handleSubmit, reset, control } = formMethods;

	const onSubmit = async (data: InferType<typeof formSchema>) => {
        const differentCrops = data.croptypes.split(",");
        const payload = {
            name: data.name,
            email: [data.email] || [""],
            phone_number: data.phone_number,
            national_id: data.national_id,
            croptypes: differentCrops,
            size_of_land: data.size_of_land,
            location: data.location,
        }
        const id = toast.loading("Creating account...");
        setLoading(true);

        try {
            const newAccount = await futures_backend.add_farmer(payload as any);
            console.log(newAccount);
            toast.success("Account created successfully", { id });
            reset();
            router.push("/farmer")
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
					<AppInput label="National ID" name="national_id" placeholder="e.g. 12345678" control={control} />
					<AppInput label="Where are you located?" name="location" placeholder="e.g. Nairobi" control={control} />
					<AppInput label="Size of Land" name="size_of_land" placeholder="e.g. 5 acres" control={control} />
					<AppInput label="What do you grow?" name="croptypes" placeholder="e.g. Maize, Beans, etc" control={control} />
				</div>
				<div className="flex items-center justify-between">
					<Button variant="outline" className="rounded-r-full rounded-bl-full" onClick={goToPreviousStep} type="button">
						Back
					</Button>
					<Button className="rounded-r-full rounded-bl-full" type="submit" disabled={loading}>
						{" "}
						{loading && <Loader2 className="animate-spin" size={20} />}
						{loading ? "Creating account..." : "Submit"}{" "}
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default OnboardFarmer;

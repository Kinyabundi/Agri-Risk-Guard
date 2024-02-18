import { ChangeEvent } from "react";
import { Control } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface IProps {
	label: string;
	name?: string;
	description?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	setValue?: (value: string) => void;
	control?: Control<any>;
	placeholder?: string;
	className?: string;
}

const ControlledTextarea = ({ label, name, description, control, placeholder, className }: Omit<IProps, "value" | "setValue" | "name" | "onChange"> & { name: string }) => {
	return (
		<FormField
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Textarea {...field} placeholder={placeholder} className={className} />
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

const UncontrolledTextarea = ({ label, description, value, setValue, onChange, placeholder, className }: Omit<IProps, "control" | "name">) => {
	return (
		<div className="flex flex-col space-y-3">
			<Label>{label}</Label>
			<Textarea
				value={value}
				onChange={(e) => {
					onChange && onChange(e);
					setValue && setValue(e.target.value);
				}}
				placeholder={placeholder}
				className={className}
			/>
			<p>{description}</p>
		</div>
	);
};

const CustomTextArea = (props: IProps) => {
	return props?.control ? <ControlledTextarea {...props} name={props?.name ?? props?.label} /> : <UncontrolledTextarea {...props} />;
};

export default CustomTextArea;

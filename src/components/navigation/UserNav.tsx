"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function UserNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative space-x-2">
					<Avatar className="w-8 h-8 rounded-full">
						<AvatarImage src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4" alt="User's Avatar" />
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<p className="">{"John Legend"}</p>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{"John Legend"}</p>
						<p className="text-xs  leading-none text-muted-foreground">{"0742517188"}</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

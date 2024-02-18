"use client";
import useAuthStore from "@/hooks/useAuthStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { getInitials } from "@/utils";
import { Principal } from "@dfinity/principal";

export default function UserNav() {
	const { account } = useAuthStore();
	console.log(account);
	console.log(account?.principal?.toText());
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative space-x-2">
					<Avatar className="w-8 h-8 rounded-full">
						<AvatarImage src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4" alt="User's Avatar" />
						<AvatarFallback>{getInitials(account?.name ?? "John Legend")}</AvatarFallback>
					</Avatar>
					<p className="">{account?.name ?? "John Legend"}</p>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{account?.name}</p>
						<p className="text-xs  leading-none text-muted-foreground">{account?.phone_number}</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

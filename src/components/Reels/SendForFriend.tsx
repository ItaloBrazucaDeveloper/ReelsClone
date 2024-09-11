import { Search } from "lucide-react";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { List } from "../List";
import { Interaction } from "./Interaction";

export function SendForFriend() {
	return (
		<div className="grid place-items-center w-full gap-3 px-4">
			<div className="flex items-center justify-center w-full gap-4">
				<Input
					type="text"
					autoFocus={false}
					inputMode="text"
					icon={Search}
					placeholder="Search"
					className="bg-zinc-700 bg-opacity-50 w-full"
				/>
				<Icon name="user-plus" size={21} className="text-zinc-300" />
			</div>
			
			<footer className="absolute left-1/2 bottom-0 -translate-x-1/2 grid gap-2 mb-6 pt-3.5 w-full border-t-2 border-zinc-700 border-opacity-25 bg-zinc-800">
				<List
					direction="row"
					className="flex items-center justify-around text-zinc-300"
				>
					<Interaction text="Add note" className="relative">
						<Icon
							name="plus"
							size={15}
							className="absolute left-0.5 -top-1 z-10 bg-zinc-700 p-1 rounded-full"
						/>
						<img
							src="https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
							height={"34rem"}
							width={"34rem"}
							className="-mb-1 rotate-12 object-cover rounded-lg"
						/>
					</Interaction>
					<Interaction text="Share">
						<div className="grid place-items-center bg-zinc-700 bg-opacity-60 rounded-full w-12 h-12">
							<Icon name="share-2" size={23} strokeWidth={1.5} />
						</div>
					</Interaction>
					<Interaction text="Copiar link">
						<div className="grid place-items-center bg-zinc-700 bg-opacity-60 rounded-full w-12 h-12">
							<Icon name="link" size={23} strokeWidth={1.5} className="" />
						</div>
					</Interaction>
					<Interaction text="Download">
						<div className="grid place-items-center bg-zinc-700 bg-opacity-60 rounded-full w-12 h-12">
							<Icon name="download" size={23} strokeWidth={1.5} />
						</div>
					</Interaction>
					<Interaction text="Story">
						<div className="grid place-items-center bg-zinc-700 bg-opacity-60 rounded-full w-12 h-12">
							<Icon name="circle-plus" size={23} strokeWidth={1.5} />
						</div>
					</Interaction>
				</List>
			</footer>
		</div>
	);
}

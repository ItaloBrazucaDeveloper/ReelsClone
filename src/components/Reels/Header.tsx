import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Icon } from "../Icon";
import Popover, { type modalHandles } from "../Modal";

export default function Header() {
	const popoverRef = useRef<modalHandles>(null);
	const openPopover = () => {
		popoverRef.current?.openModal();
	};

	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <Dont need> */}
			<h1
				onClick={openPopover}
				className="absolute top-9 left-2.5 z-10 flex items-center text-3xl font-bold text-zinc-100 cursor-pointer after:content"
			>
				<span>Reels</span>
				<ChevronDown strokeWidth={3} className="ml-1 mt-2.5" />
			</h1>
			<Icon
				name="camera"
				size={30}
				className="sticky z-10 top-2.5 ml-[90%] text-zinc-100"
			/>
			<Popover
				ref={popoverRef}
				className="m-3 mt-14 bg-zinc-800 rounded-2xl bg-opacity-95"
			>
				<ul className="grid gap-3 text-base font-base text-zinc-200 p-2 select-none">
					<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-xl py-2 pl-3.5 pr-20">
						<Icon name="users" size={20} />
						Following
					</li>
					<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-lg py-2 pl-3.5 pr-20">
						<Icon name="map-pin" size={20} />
						Nearby
					</li>
					<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-lg py-2 pl-3.5 pr-20">
						<Icon name="notebook-pen" size={20} />
						Notes
					</li>
				</ul>
			</Popover>
		</>
	);
}

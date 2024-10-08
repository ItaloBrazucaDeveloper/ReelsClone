import type { ElementType } from "react";

type tagProps = {
	icon: ElementType;
	text: string;
};

export function Tag({ icon: Icon, text = "" }: tagProps) {
	return (
		<li className="flex gap-1 bg-zinc-700 bg-opacity-65 outline outline-1 outline-zinc-500 px-2.5 py-0.5 rounded-full">
			<div className="flex gap-1 justify-center items-center select-none">
				<Icon size={13} className="text-zinc-300" />
				<span className="text-zinc-300 text-xs">{text}</span>
			</div>
		</li>
	);
}

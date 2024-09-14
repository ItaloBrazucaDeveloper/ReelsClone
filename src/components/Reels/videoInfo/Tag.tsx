import type dynamicIconImports from "lucide-react/dynamicIconImports";
import { Icon } from "../../Icon";

export interface tagProps {
	icon: keyof typeof dynamicIconImports;
	text: string;
}

export function Tag({ icon, text = "" }: tagProps) {
	return (
		<li className="flex items-center gap-x-1 bg-transparent backdrop-blur-md border border-zinc-100 border-opacity-15 px-2.5 py-1.5 rounded-full">
			<Icon name={icon} size={13} className="text-zinc-300 m-auto" />
			<span className="text-zinc-300 text-xs">{text}</span>
		</li>
	);
}

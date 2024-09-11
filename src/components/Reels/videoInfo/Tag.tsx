import type dynamicIconImports from "lucide-react/dynamicIconImports";
import { Icon } from "../../Icon";

export interface tagProps {
	iconName: keyof typeof dynamicIconImports;
	text: string;
};

export function Tag({ iconName, text = "" }: tagProps) {
	return (
		<li className="flex gap-1 bg-zinc-700 bg-opacity-65 outline outline-1 outline-zinc-500 px-2.5 py-0.5 rounded-full">
			<Icon name={iconName} size={13} className="text-zinc-300" />
			<span className="text-zinc-300 text-xs">{text}</span>
		</li>
	);
}

import type { HTMLAttributes } from "react";

type interactionProps = {
	text?: string;
	textSize?: string;
	inlineItems?: boolean;
} & HTMLAttributes<HTMLLIElement>;

export function Interaction({
	textSize = "sm",
	className = "",
	inlineItems,
	text = "",
	children,
	...props
}: interactionProps) {
	return (
		<li
			{...props}
			className={`flex ${inlineItems ? "flex-row" : "flex-col"} items-center gap-1 ${className}`}
		>
			{children}
			{text && <span className={`text-${textSize} text-wrap`}>{text}</span>}
		</li>
	);
}

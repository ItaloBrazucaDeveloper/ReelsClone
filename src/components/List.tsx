import type { HTMLAttributes } from "react";

type listProps = HTMLAttributes<HTMLUListElement> & {
	direction?: "row" | "col";
};

export function List({
	children: ListItem,
	className = "",
	direction = "col",
}: listProps) {
	return <ul className={`flex flex-${direction} ${className}`}>{ListItem}</ul>;
}

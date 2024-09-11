import type { HTMLAttributes } from "react";

type listProps = {
	direction?: "row" | "col";
} & HTMLAttributes<HTMLUListElement>;

export function List({
	children: ListItem,
	className = "",
	direction = "col",
}: listProps) {
	return <ul className={`flex flex-${direction} ${className}`}>{ListItem}</ul>;
}

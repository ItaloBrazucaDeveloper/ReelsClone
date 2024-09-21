import type { HTMLAttributes } from "react";

type listProps = {
	direction?: "row" | "col";
} & HTMLAttributes<HTMLUListElement>;

/**
 *  @param direction "col" or "row"
 */

export function List({
	children: ListItem,
	className = "",
	direction = "col",
}: listProps) {
	return <ul className={`flex flex-${direction} ${className}`}>{ListItem}</ul>;
}

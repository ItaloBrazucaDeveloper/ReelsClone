import { useState } from "react";

type reelsDescription = {
	text?: string;
	className?: string;
};

const LOREM =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit nobis magnam! Id, esse non corrupti placeat numquam magnam! Dolorem, quasi reprehenderit! Aliquid nostrum officiis libero voluptatum? Quo, nihil asperiores.";

export function Description({ text = LOREM, className }: reelsDescription) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<p
			onClick={handleIsOpen}
			className={
				className ??
				`${!isOpen && "truncate w-56"} text-zinc-200 z-[1] cursor-pointer`
			}
		>
			{isOpen && (
				<div className="absolute -z-10 left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-900 opacity-45" />
			)}
			{text}
		</p>
	);
}

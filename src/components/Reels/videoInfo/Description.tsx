import { useState } from "react";

export type descriptionProps = {
	text?: string;
	className?: string;
};

export function Description({ text, className }: descriptionProps) {
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
			{text ??
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit nobis magnam! Id, esse non corrupti placeat numquam magnam! Dolorem, quasi reprehenderit! Aliquid nostrum officiis libero voluptatum? Quo, nihil asperiores."}
		</p>
	);
}

import { useState } from "react";

const LOREM =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor commodi. Rem iste, illo praesentium quod aspernatur excepturi facilis tempora odit alias? Excepturi similique omnis, doloribus consectetur laborum pariatur quaerat.";

/**
 * @param text string
 */

export function Description({ text = LOREM }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleIsOpen = (): void => {
		setIsOpen(!isOpen);
	};
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<p
			onClick={handleIsOpen}
			className={`${!isOpen && "truncate w-full"} ${isOpen && "w-[130%] mb-1.5"} text-zinc-200 z-[1] cursor-pointer`}
			style={{ textShadow: "1px 1px 2px #000" }}
		>
			{text}
			{isOpen && (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div // Backdrop
					onClick={handleIsOpen}
					className="absolute -left-3 -bottom-6 -z-50 h-[500%] w-[200%] bg-gradient-to-t from-black top-zinc-800 opacity-45"
				/>
			)}
		</p>
	);
}

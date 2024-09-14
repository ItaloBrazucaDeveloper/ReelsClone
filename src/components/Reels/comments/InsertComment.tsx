import { type ElementRef, useRef } from "react";
import { Icon } from "../../Icon";
import { Input } from "../../Input";

export type comment = {
	userPhotoSource: string;
	userName: string;
	text: string;
	likes: number;
};

interface handleInsertComment {
	addNewComment: (newComment: comment) => void;
}

export function InsertComment({ addNewComment }: handleInsertComment) {
	const inputRef = useRef<ElementRef<"input">>(null);
	const newComment: comment = {
		userPhotoSource:
			"https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		userName: "userName2",
		text: "",
		likes: 0,
	};

	function submitComment(e: { key: string }) {
		if (
			e.key === "Enter" &&
			inputRef.current &&
			inputRef.current.value !== ""
		) {
			newComment.text = inputRef.current.value;
			addNewComment(newComment);
			inputRef.current.value = "";
		}
	}

	return (
		<footer className="absolute left-1/2 bottom-0 -translate-x-1/2 grid gap-2 pb-4 w-full bg-zinc-800">
			<ul className="flex justify-around w-full pt-2.5 border-t-2 border-zinc-700 border-opacity-15">
				<li title="Red Heart" className="max-sm:text-3xl text-2xl">
					&#x2764;
				</li>
				<li title="Raising Hands" className="max-sm:text-3xl text-2xl">
					&#x1F64C;
				</li>
				<li title="Fire" className="max-sm:text-3xl text-2xl">
					&#x1F525;
				</li>
				<li title="Clapping Hands" className="max-sm:text-3xl text-2xl">
					&#x1F44F;
				</li>
				<li
					title="Smiling Face with Heart-Eyes"
					className="max-sm:text-3xl text-2xl"
				>
					&#x1F60D;
				</li>
				<li title="Hushed Face" className="max-sm:text-3xl text-2xl">
					&#x1F62F;
				</li>
				<li
					title="Grinning Squinting Face"
					className="max-sm:text-3xl text-2xl"
				>
					&#x1F606;
				</li>
			</ul>
			<div className="flex items-center justify-between gap-3 mt-2 px-3.5">
				<img
					src={
						"https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					alt={""}
					height={"40rem"}
					width={"40rem"}
					className="object-cover aspect-square object-top rounded-full"
				/>
				<Input
					type="text"
					ref={inputRef}
					inputMode="text"
					autoFocus={false}
					placeholder="Add a comment..."
					className="w-[90%]"
					onKeyDown={submitComment}
				/>
				<div className="flex gap-3">
					<Icon
						name="sticker"
						strokeWidth={1.25}
						size={25}
						className="text-zinc-100"
					/>
					<Icon
						name="gift"
						strokeWidth={1.25}
						size={25}
						className="text-zinc-100"
					/>
				</div>
			</div>
		</footer>
	);
}

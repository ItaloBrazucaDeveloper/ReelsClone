import { Gift, Sticker } from "lucide-react";
import { type ElementRef, useRef } from "react";
import Input from "../../Input";
import { EmojiSugestion } from "./EmojiSugestions";

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
		userName: "arlinda.cruz_",
		text: "",
		likes: 0,
	};

	function submitComment(e: { key: string }) {
		if (
			inputRef.current &&
			e.key === "Enter" &&
			inputRef.current.value !== ""
		) {
			newComment.text = inputRef.current.value;
			addNewComment(newComment);
			inputRef.current.value = "";
		}
	}

	return (
		<footer className="absolute left-1/2 bottom-0 -translate-x-1/2 grid gap-2 pb-4 w-full bg-zinc-800">
			<EmojiSugestion />
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
					placeholder="Add a comment..."
					className="w-[90%]"
					onKeyDown={submitComment}
				/>
				<div className="flex gap-2 text-zinc-100">
					<Sticker size={25} strokeWidth={1.25} />
					<Gift size={25} strokeWidth={1.25} />
				</div>
			</div>
		</footer>
	);
}

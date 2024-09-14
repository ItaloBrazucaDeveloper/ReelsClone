import { Heart } from "lucide-react";
import { type HTMLAttributes, useRef, useState } from "react";

type likeProps = {
	size?: number;
	likes: number;
} & HTMLAttributes<HTMLSpanElement>;

export function Like({
	likes = 0,
	size = 25,
	className = "",
	style = {},
}: likeProps) {
	const countLikes = useRef<number>(likes);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const handleLike = () => {
		setIsLiked(!isLiked);
		if (countLikes.current < 1000) {
			isLiked ? countLikes.current-- : countLikes.current++;
		}
	};

	function defineLikes(): string {
		const { current: currentLikes } = countLikes;
		const strLikes = currentLikes.toLocaleString("en-US");
		let reducedLength = "";

		if (currentLikes < 1_000_000) {
			reducedLength = "K";
		} else if (currentLikes < 1_000_000_000) {
			reducedLength = "M";
		} else if (currentLikes >= 1_000_000_000) {
			reducedLength = "B";
		}

		return `${strLikes.match(/^\d*\,*?[1-9]{1,2}/g)}${reducedLength}`;
	}

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className={"grid place-items-center"} onClick={handleLike}>
			<Heart
				size={size}
				strokeWidth={1.5}
				className={`transition-colors
                  ${isLiked && "fill-rose-600 text-rose-600"}
                  ${isLiked ?? "text-zinc-50 fill-transparent"}
                `}
			/>
			<span className={`text-sm ${className}`} style={style}>
				{likes < 1000 ? countLikes.current : defineLikes()}
			</span>
		</div>
	);
}

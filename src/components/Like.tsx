import { Heart } from "lucide-react";
import { useState } from "react";

type likeProps = {
	size: number;
	likes: number;
	className?: string;
};

export function Like({ likes = 0, size = 0, className = "" }: likeProps) {
	const [isLiked, setIsLiked] = useState<boolean>(true);
	const handleIsLiked = () => {
		setIsLiked(!isLiked);
		likes++;
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className={`grid place-items-center ${className}`}
			onClick={handleIsLiked}
		>
			<Heart
				size={size}
				strokeWidth={1.5}
				className={`transition-colors
                  ${isLiked && "fill-rose-600 text-rose-600"}
                  ${isLiked ?? "text-zinc-50 fill-transparent"}
                `}
			/>
			<span className="text-sm text-zinc-400">{likes}</span>
		</div>
	);
}

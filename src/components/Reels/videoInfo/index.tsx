import { Dot } from "lucide-react";
import { useState } from "react";
import { Description } from "./Description";
import { Tag, type tagProps } from "./Tag";

type videoInfoProps = {
	userInfo: {
		userPhoto: string;
		userName: string;
	};
	description?: string;
	tags?: tagProps[];
	following: boolean;
};

export function VideoInfo({
	userInfo: { userName, userPhoto },
	description,
	tags,
	following,
}: videoInfoProps) {
	const [isFollowing, setIsFollowing] = useState<boolean>(following);
	const handleIsFollowing = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<>
			<div className="flex items-center justify-center gap-2 font-medium">
				<img
					src={userPhoto}
					alt={userName}
					height={"38px"}
					width={"38px"}
					className="object-cover aspect-square object-top rounded-full"
				/>
				<span className="max-sm:text-lg text-zinc-100">{userName}</span>
				<Dot className="text-zinc-200 -mx-1" />
				<button
					type="button"
					className="max-sm:text-base rounded-md text-zinc-50"
					onClick={handleIsFollowing}
				>
					{isFollowing ? "Following" : "Follow"}
				</button>
			</div>
			<Description text={description} />
			<ul className="flex gap-3">
				{tags?.map(({ text, icon }, index) => (
					<Tag key={`${icon}_${index + 1}`} icon={icon} text={text} />
				))}
			</ul>
		</>
	);
}

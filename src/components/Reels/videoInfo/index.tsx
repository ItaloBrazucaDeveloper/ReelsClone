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
			<div className="flex items-center justify-center gap-2">
				<img
					src={userPhoto}
					alt={userName}
					height={"38px"}
					width={"38px"}
					className="object-cover aspect-square object-top rounded-full"
				/>
				<span className="max-sm:text-lg font-medium text-md text-zinc-100">
					{userName}
				</span>
				<button
					type="button"
					className="max-sm:text-base outline outline-1 outline-zinc-300 px-3.5 ml-2 rounded-md"
					onClick={handleIsFollowing}
				>
					{isFollowing ? "Following" : "Follow"}
				</button>
			</div>
			<Description text={description} />
			<ul className="flex gap-3">
				{tags?.map(({ text, iconName }, index) => (
					<Tag
						key={`${iconName}_${index + 1}`}
						iconName={iconName}
						text={text}
					/>
				))}
			</ul>
		</>
	);
}

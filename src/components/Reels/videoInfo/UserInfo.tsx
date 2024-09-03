import { useState } from "react";

type userInfoProps = {
	userPhoto: string;
	userName: string;
	following: boolean;
};

export function UserInfo({
	userPhoto = "",
	userName = "",
	following = false,
}: userInfoProps) {
	const [isFollowing, setIsFollowing] = useState<boolean>(following);
	const handleIsFollowing = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<li className="flex items-center justify-center gap-2">
			<img
				src={userPhoto}
				alt={userName}
				height={"38px"}
				width={"38px"}
				className="object-cover aspect-square object-top rounded-full"
			/>
			<h3 className="max-sm:text-lg font-medium text-md text-zinc-100">
				{userName}
			</h3>
			<button
				type="button"
				className="max-sm:text-base outline outline-1 outline-zinc-300 px-3.5 ml-2 rounded-md"
				onClick={handleIsFollowing}
			>
				{isFollowing ? "Following" : "Follow"}
			</button>
		</li>
	);
}

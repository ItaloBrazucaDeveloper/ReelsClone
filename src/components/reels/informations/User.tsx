import { useState } from 'react';
import { Img } from '../../Image';
import { Text } from '../../Text';

export interface UserProps {
	username: string;
	userPhoto: { src: string; alt: string };
	isFollowingThisUser?: boolean;
}

/**
 * 	@param username string
 * 	@param userPhoto object
 * 	@param isFollowingThisUser boolean
 */
export const User = ({
	username,
	userPhoto,
	isFollowingThisUser,
}: UserProps) => {
	const [isFollowing, setIsFollowing] = useState(isFollowingThisUser);
	const handleIsFollowing = () => {
		setIsFollowing(!isFollowing);
	};
	const shadowTextConfig = { x: 1.1, y: 1.1, blur: 2.5, intensiy: 70 };
	return (
		<div className="flex items-center justify-start gap-2.5 text-zinc-100 font-semibold">
			<Img imgConfig={userPhoto} className="h-9 w-9 rounded-full" />
			<Text
				shadow={shadowTextConfig}
				className="after:content-['•'] after:ml-2.5 after:text-xs"
			>
				{username}
			</Text>
			<button
				type="button"
				onClick={handleIsFollowing}
				className="border-none outline-none bg-transparent"
			>
				<Text shadow={shadowTextConfig}>
					{isFollowing ? 'Following' : 'Follow'}
				</Text>
			</button>
		</div>
	);
};

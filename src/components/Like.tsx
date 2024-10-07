import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Text } from './Text';

interface LikeProps {
	checked?: boolean;
	sizeLikeIcon: number;
	likes: string | number;
}

/**
 *	@param checked boolean - when true the heart icon is checked
 *	@param sizeLikeIcon number - size of heart icon
 *	@param likes number - amount likes
 */
export const Like = ({
	checked = false,
	sizeLikeIcon = 25,
	likes = 0,
}: LikeProps) => {
	const [isLiked, setLiked] = useState(checked);
	const handleIsLiked = () => {
		setLiked(!isLiked);
	};
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleIsLiked}
			className="flex flex-col items-center justify-center gap-1 min-h-16 min-w-16"
		>
			<Heart
				size={sizeLikeIcon}
				className={`${isLiked && 'fill-rose-600 text-rose-600'} transition-colors`}
			/>
			<Text className="text-base">{likes}</Text>
		</div>
	);
};

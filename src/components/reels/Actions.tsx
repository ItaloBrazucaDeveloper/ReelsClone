import { Ellipsis, MessageCircle, Send } from 'lucide-react';
import { useReducedNumber } from '../../hooks/useReducedNumber';
import { Img } from '../Image';
import { Like } from '../Like';
import { Text } from '../Text';

interface ActionsProps {
	likes: number;
	comments: number;
	shares: number;
	albumMusicPhoto: string;
}

/**
 *  @param comments number - how many comments must be have
 *  @param shares number - how many shares must be have
 *  @param albumMusicPhoto string - source/path of photo album music
 */
export function Actions({
	likes,
	comments,
	shares,
	albumMusicPhoto,
}: ActionsProps) {
	const reducedNumbers = useReducedNumber(likes, comments, shares);
	const [reducedLikes, reducedComments, reducedShares] = reducedNumbers;
	return (
		<ul className="flex flex-col items-end gap-2.5 mr-1.5 absolute right-0 bottom-0 text-zinc-100 *:select-none *:cursor-pointer">
			<li>
				<Like sizeLikeIcon={27} likes={reducedLikes} />
			</li>
			<li className="flex flex-col items-center justify-center gap-1 h-16 w-16">
				<MessageCircle size={27} />
				<Text className="text-base">{reducedComments}</Text>
			</li>
			<li className="flex flex-col items-center justify-center gap-1 h-16 w-16">
				<Send size={27} />
				<Text className="text-base">{reducedShares}</Text>
			</li>
			<li className="flex flex-col items-center justify-center -my-2 h-16 w-16">
				<Ellipsis size={27} />
			</li>
			<li className="flex flex-col items-center justify-center -mt-4 h-16 w-16">
				<Img
					imgConfig={{ src: albumMusicPhoto, alt: 'album music photo' }}
					className="h-6 w-6 rounded-md outline outline-[3px] outline-zinc-100"
				/>
			</li>
		</ul>
	);
}

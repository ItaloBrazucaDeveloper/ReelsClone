import { useState } from 'react';
import { Text } from '../../Text';

export interface DescriptionProps {
	text: string;
}

/**
 *  @param text string
 *  @description
 */
export const Description = ({ text }: DescriptionProps) => {
	const [isOpen, setIsOPen] = useState(false);
	const handleIsOpen = () => {
		setIsOPen(!isOpen);
	};
	return (
		<Text
			onClick={handleIsOpen}
			shadow={{ x: 1, y: 1 }}
			className={`text-zinc-100 text-sm ${isOpen ? 'max-w-[80%]' : 'w-56 truncate'} cursor-pointer`}
		>
			{text}
		</Text>
	);
};

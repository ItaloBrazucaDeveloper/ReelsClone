import type { HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
	shadow?: { x: number; y: number; blur?: number; intensiy?: number };
}

/**
 *  @param text string
 * 	@param shadow object - configurate text shadow atribute
 *  @param ...props - any span tag attribute
 *  @description this component provide span HTML element with text shadow
 */
export const Text = ({
	children: text = 'text',
	shadow = { x: 1.5, y: 1.5, blur: 0, intensiy: 90 },
	className = 'text-base',
	...props
}: TextProps) => {
	const { x, y, blur, intensiy } = shadow;
	return (
		<span
			style={{ textShadow: `${x}px ${y}px ${blur}px #000000${intensiy}` }}
			className={className}
			{...props}
		>
			{text}
		</span>
	);
};

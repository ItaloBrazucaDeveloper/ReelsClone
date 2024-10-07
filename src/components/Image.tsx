import type { ImgHTMLAttributes } from 'react';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	imgConfig: { src: string; alt: string };
}

/**
 *  @param imgConfig object - object contains a src and alt basics image element
 *  @param className string - you can add styles for this component
 */
export const Img = ({ imgConfig: { src, alt }, className }: ImgProps) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`object-cover aspect-square min-h-5 min-w-5 ${className}`}
		/>
	);
};

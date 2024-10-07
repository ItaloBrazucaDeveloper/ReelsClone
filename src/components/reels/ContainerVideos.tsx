import { type ElementRef, type HTMLAttributes, useRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * 	@param Videos - this param must be a Video component
 * 	@param ...props - this param recieve any attribute of div element
 * 	@description this component is a container for videos. It can
 *  	set wich video is played based onScroll event.
 */
export const ContainerVideos = ({
	children: Videos,
	...props
}: ContainerProps) => {
	const containerRef = useRef<ElementRef<'div'>>(null);
	const setVideoPlayedOnScroll = () => {};
	return (
		<div
			onScroll={setVideoPlayedOnScroll}
			ref={containerRef}
			{...props}
			className="max-h-[90%] min-h-[680px] w-96 *:h-full relative"
		>
			{Videos}
		</div>
	);
};

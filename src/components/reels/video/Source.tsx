import { type ElementRef, type VideoHTMLAttributes, useRef } from 'react';

interface SourceProps extends VideoHTMLAttributes<HTMLVideoElement> {}

/**
 * @param src - recieve a source/path of video
 * @param ...props - this param recieve any attribute of video element
 * @description it's a custom video tag of HTMl. Must have a src param.
 */
export const Source = ({ src, ...props }: SourceProps) => {
	const videoRef = useRef<ElementRef<'video'>>(null);

	const togglePlayPaused = () => {
		videoRef.current?.paused
			? videoRef.current?.play()
			: videoRef.current?.pause();
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <document event>
		<div onClick={togglePlayPaused} className="relative">
			<video
				loop
				autoPlay
				playsInline
				ref={videoRef}
				{...props}
				className="h-full rounded-t-3xl"
			>
				<source src={src} />
				{/* Error, video no load */}
			</video>
			{/* <Timeline /> */}
		</div>
	);
};

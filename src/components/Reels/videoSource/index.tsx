import {
	type ElementRef,
	type VideoHTMLAttributes,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";
import Input from "../../Input";
import style from "./RangeSlider.module.css";

type reelsVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export interface videoHandle {
	playPauseVideo: () => void;
	/** Return DOMRect of container from VideoSource component  */
	getProps: () => DOMRect | null;
	playVideo: () => void;
	pauseVideo: () => void;
}

/**
 * @param src string
 * @param props Any HTMLVideoElement Attributes
 * @return Video Compoenent
 */

const VideoSource = forwardRef<videoHandle, reelsVideoProps>(
	({ src = "", ...props }, ref) => {
		const videoRef = useRef<ElementRef<"video">>(null);
		const rangeRef = useRef<ElementRef<"input">>(null);
		const divRef = useRef<ElementRef<"div">>(null);

		const handleTrackVideo = () => {
			const duration = videoRef.current?.duration || 0;
			const currentTime = videoRef.current?.currentTime || 0;
			const value = (currentTime / duration) * 100;
			if (rangeRef.current) rangeRef.current.value = `${value}`;
		};

		function getProps(): DOMRect | null {
			return divRef.current?.getBoundingClientRect() || null;
		}

		const playVideo = (): void => {
			videoRef.current?.play();
		};

		const pauseVideo = (): void => {
			videoRef.current?.pause();
		};

		const playPauseVideo = (): void => {
			videoRef.current?.paused ? playVideo() : pauseVideo();
		};

		useImperativeHandle(ref, () => ({
			playPauseVideo,
			getProps,
			playVideo,
			pauseVideo,
		}));

		return (
			// biome-ignore lint/a11y/useKeyWithClickEvents: <onKeydown has in Document>
			<div
				ref={divRef}
				onClick={playPauseVideo}
				className="relative h-full w-full overflow-hidden"
			>
				<video
					loop
					muted
					autoPlay
					ref={videoRef}
					src={src}
					onTimeUpdate={handleTrackVideo}
					className="h-full w-full object-cover"
					{...props}
				/>
				<Input type="range" ref={rangeRef} inputStyle={style.range_slider} />
			</div>
		);
	},
);

export default VideoSource;

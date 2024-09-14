import {
	type ElementRef,
	type VideoHTMLAttributes,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";
import { Input } from "../../Input";
import style from "./RangeSlider.module.css";

type reelsVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export interface videoHandle {
	playPauseVideo: () => void;
	getProps: () => DOMRect;
	playVideo: () => void;
	pauseVideo: () => void;
}

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

		const playPauseVideo = (): void => {
			if (videoRef?.current?.paused) {
				videoRef.current?.play();
			} else {
				videoRef?.current?.pause();
			}
		};

		function getProps(): DOMRect {
			return divRef.current!.getBoundingClientRect();
		}

		useImperativeHandle(ref, () => {
			return {
				playPauseVideo,
				getProps,
				playVideo(): void {
					videoRef.current?.play();
				},
				pauseVideo(): void {
					videoRef.current?.pause();
				},
			};
		});

		return (
			<div ref={divRef} className="relative h-full w-full overflow-hidden">
				<video
					loop
					muted
					autoPlay
					playsInline
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

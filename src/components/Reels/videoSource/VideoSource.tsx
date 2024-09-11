import { type ElementRef, type VideoHTMLAttributes, useRef } from "react";
import { Input } from "../../Input";
import style from "./RangeSlider.module.css";

type reelsVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export function VideoSource({ src = "", ...props }: reelsVideoProps) {
	const videoRef = useRef<ElementRef<"video">>(null);
	const rangeRef = useRef<ElementRef<"input">>(null);

	const handleTrackVideo = () => {
		const duration = videoRef.current?.duration || 0;
		const currentTime = videoRef.current?.currentTime || 0;
		const value = (currentTime / duration) * 100;
		if (rangeRef.current) rangeRef.current.value = `${value}`;
	};

	return (
		<div className="relative h-full w-full overflow-hidden">
			<video
				loop
				autoPlay
				playsInline
				src={src}
				ref={videoRef}
				onTimeUpdate={handleTrackVideo}
				className="h-full w-full object-cover"
				{...props}
			/>
			<Input type="range" ref={rangeRef} inputStyle={style.range_slider} />
		</div>
	);
}

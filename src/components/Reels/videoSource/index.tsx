import { type ElementRef, type VideoHTMLAttributes, useRef } from "react";
import { Input } from "../../Input";
import style from "./rangeSlider.module.css";

type reelsVideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export function VideoSource({ src = "" }: reelsVideoProps) {
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
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<video
				loop={true}
				autoPlay={true}
				playsInline={true}
				ref={videoRef}
				onTimeUpdate={handleTrackVideo}
				className="h-full w-full object-cover"
			>
				<source src={src} />
				<p>Error! :(</p>
			</video>
			<Input type="range" ref={rangeRef} inputStyle={style.range_slider} />
		</div>
	);
}

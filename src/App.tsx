import { useEffect, useRef, useState } from "react";
import Reels, { type reelsProps } from "./components/Reels";
import ReelsHeader from "./components/Reels/Header";
import type { videoHandle } from "./components/Reels/videoSource";

export default function App() {
	const reelsVideoRef = useRef<videoHandle>(null);
	const [reels, setReels] = useState<reelsProps[] | null>(null);

	/** Set wich video must be played based onscroll event */
	function setPlayedVideo(e: React.WheelEvent<HTMLDivElement>) {
		const { offsetHeight: containerHeight, scrollTop } = e.currentTarget;
		const middleLine = (containerHeight + scrollTop) / 2;

		const { top: topReels, bottom: endReels } =
			reelsVideoRef.current?.getProps() || {};

		if (middleLine >= (topReels ?? 0) && (endReels ?? 0) >= middleLine) {
			reelsVideoRef.current?.pauseVideo();
		} else {
			reelsVideoRef.current?.playVideo();
		}
	}

	useEffect(() => {
		fetch("src/data/reels.json")
			.then((res) => res.json())
			.catch((error) => console.error(error))
			.then((json: reelsProps[]) => setReels(json));
	}, []);

	return (
		<main className="grid place-items-center h-lvh w-full bg-zinc-900">
			<div
				onScroll={setPlayedVideo}
				className="relative overflow-y-scroll snap-y snap-mandatory scrollbar-none max-sm:h-lvh max-sm:w-full rounded-xl h-[90%] w-[25rem]"
			>
				<ReelsHeader />
				{reels?.map((reels, index) => (
					<Reels
						ref={reelsVideoRef}
						key={`reels_${index + 1}`}
						src={reels.src}
						tags={reels.tags}
						likes={reels.likes}
						userName={reels.userName}
						comments={reels.comments}
						userPhoto={reels.userPhoto}
						isFollowingThisUser={reels.isFollowingThisUser}
					/>
				))}
			</div>
		</main>
	);
}

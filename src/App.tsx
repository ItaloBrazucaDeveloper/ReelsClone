import { useEffect, useRef, useState } from "react";
import { Icon } from "./components/Icon";
import { Modal, type modalHandles } from "./components/Modal";
import Reels, { type reelsProps } from "./components/Reels";
import type { videoHandle } from "./components/Reels/videoSource";

export default function App() {
	const popoverRef = useRef<modalHandles>(null);
	const reelsVideoRef = useRef<videoHandle>(null);
	const [reels, setReels] = useState<reelsProps[] | null>(null);

	const openPopover = () => {
		popoverRef.current?.openModal();
	};

	function setPlayedVideo(e: React.WheelEvent<HTMLDivElement>) {
		const { offsetHeight: containerHeight, scrollTop } = e.currentTarget;
		const middleLine = (containerHeight + scrollTop) / 2;

		const { top: topReels, bottom: endReels } =
			reelsVideoRef.current!.getProps();

		if (middleLine >= topReels && endReels >= middleLine) {
			reelsVideoRef.current?.playVideo();
		} else {
			reelsVideoRef.current?.pauseVideo();
		}
	}

	useEffect(() => {
		fetch("src/data/reels.json")
			.then((res) => res.json())
			.catch(() => console.log("deu ruim"))
			.then((json: reelsProps[]) => setReels(json));
	}, []);

	return (
		<main className="grid place-items-center h-lvh w-full bg-zinc-900">
			<div
				onScroll={setPlayedVideo}
				className="relative overflow-y-scroll snap-y snap-mandatory scrollbar-none max-sm:h-lvh max-sm:w-full rounded-xl h-[90%] w-[25rem]"
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<h1
					onClick={openPopover}
					className="absolute mt-1 ml-3 z-10 text-3xl font-bold text-zinc-100 cursor-pointer"
				>
					Reels
					<Icon
						name="chevron-down"
						className="absolute top-2.5 left-full ml-1"
					/>
				</h1>
				<Modal
					ref={popoverRef}
					className="m-3 mt-14 bg-zinc-800 rounded-2xl bg-opacity-95"
				>
					<ul className="grid gap-3 text-base font-base text-zinc-200 p-2 select-none">
						<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-xl py-2 pl-3.5 pr-20">
							<Icon name="users" size={20} />
							Following
						</li>
						<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-lg py-2 pl-3.5 pr-20">
							<Icon name="map-pin" size={20} />
							Nearby
						</li>
						<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-lg py-2 pl-3.5 pr-20">
							<Icon name="notebook-pen" size={20} />
							Notes
						</li>
					</ul>
				</Modal>
				{reels?.map((reels, index) => (
					<Reels
						key={`reels_${index + 1}`}
						ref={reelsVideoRef}
						src={reels.src}
						userName={reels.userName}
						likes={reels.likes}
						userPhoto={reels.userPhoto}
						isFollowingThisUser={reels.isFollowingThisUser}
						tags={reels.tags}
						comments={reels.comments}
					/>
				))}
			</div>
		</main>
	);
}

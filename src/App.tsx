import { useRef } from "react";
import { Icon } from "./components/Icon";
import { Modal, type modalHandles } from "./components/Modal";
import Reels from "./components/Reels";

export default function App() {
	const popoverRef = useRef<modalHandles>(null);
	const openPopover = () => {
		popoverRef.current?.openModal();
	};

	return (
		<main className="grid place-items-center h-lvh w-full bg-zinc-900">
			<div className="relative overflow-y-scroll snap-y snap-mandatory scrollbar-none max-sm:h-lvh max-sm:w-full rounded-xl h-[90%] w-[25rem]">
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
				{/* ----- Videos ----- */}
				<Reels
					key={"reels_1"}
					src={"./assets/videos/video_cooking.mp4"}
					videoInfo={{
						userName: "cooktimes__",
						likes: 4000,
						photoSource: "./assets/img/userPhoto.jpg",
						isFollowingThisUser: false,
					}}
					tags={[{ iconName: "gift", text: "Give a gift" }]}
				/>
				<Reels
					key={"reels_2"}
					src={"./assets/videos/video_cat.mp4"}
					videoInfo={{
						userName: "crazy__cat",
						likes: 1_501_970,
						photoSource: "./assets/img/userPhoto.jpg",
						isFollowingThisUser: true,
					}}
				/>
				<Reels
					key={"reels_3"}
					src={"./assets/videos/video_beautyPlace.mp4"}
					videoInfo={{
						userName: "beuatyplace_s",
						likes: 204_439,
						photoSource: "./assets/img/userPhoto.jpg",
						isFollowingThisUser: false,
					}}
					tags={[{ iconName: "music", text: "Original audio" }]}
					comments={[
						{
							likes: 15,
							text: "What a wonderfull world!!!",
							userName: "ritalee23",
							userPhotoSource: "",
						},
						{
							likes: 100,
							text: "😭😭 Beautyfull",
							userName: "",
							userPhotoSource: "",
						},
						{
							likes: 120,
							text: "Where??? Tell me!",
							userName: "",
							userPhotoSource: "",
						},
					]}
				/>
			</div>
		</main>
	);
}

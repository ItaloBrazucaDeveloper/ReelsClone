import {
	Camera,
	ChevronDown,
	EllipsisVertical,
	Gift,
	Heart,
	MapPin,
	MessageCircle,
	Music,
	NotebookPen,
	Send,
	Users,
} from "lucide-react";
import { useRef, useState } from "react";
import { List } from "./components/List";
import { Modal, type modalHandles } from "./components/Modal";
import {
	Comments,
	Interaction,
	MoreActions,
	SendForFriend,
	VideoSource,
	Videoinfo,
	VideosContainer,
} from "./components/Reels";

export default function App() {
	const modalRef = useRef<modalHandles>(null);

	const [isLiked, setIsLiked] = useState<boolean>(true);
	const handleIsLiked = () => {
		setIsLiked(!isLiked);
	};

	const [modalContent, setModalContent] = useState<React.ReactNode | null>(
		null,
	);
	const changeModalContent = (element: React.ReactNode | null) => {
		setModalContent(element);
		modalRef.current?.openModal();
	};

	console.log("renderizou");

	return (
		<main className="grid place-items-center h-lvh w-full bg-zinc-800">
			<VideosContainer>
				<Modal
					ref={modalRef}
					popover={!modalContent}
					resizeble={modalContent != null}
				>
					{modalContent ?? (
						<ul className="grid gap-3 text-base font-base text-zinc-200 p-2 select-none">
							<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-xl py-2 pl-3.5 pr-20">
								<Users size={20} />
								Following
							</li>
							<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-lg py-2 pl-3.5 pr-20">
								<MapPin size={20} />
								Nearby
							</li>
							<li className="flex items-center gap-3 hover:bg-zinc-700 hover:bg-opacity-45 rounded-lg py-2 pl-3.5 pr-20">
								<NotebookPen size={20} />
								Notes
							</li>
						</ul>
					)}
				</Modal>
				<VideoSource src="https://videos.pexels.com/video-files/8281164/8281164-hd_1080_1920_24fps.mp4" />
				<div className="absolute pt-2 pb-5 px-3 inset-0 h-full w-full grid grid-cols-5 grid-rows-2">
					{/* ----- Video Header ----- */}
					<header className="flex items-center justify-between h-fit col-span-full text-3xl font-bold text-zinc-100">
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<h1
							onClick={() => changeModalContent(null)}
							className="relative flex cursor-pointer"
						>
							Reels <ChevronDown className="absolute top-2.5 left-full ml-1" />
						</h1>
						<Camera size={30} strokeWidth={1.75} className="text-zinc-200" />
					</header>
					{/* ----- Video Info ----- */}
					<List className="justify-end items-start gap-1.5 text-zinc-50 col-span-4">
						<Videoinfo.User
							following={true}
							userName={"username2_."}
							userPhoto={
								"https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
						/>
						<Videoinfo.Description />
						<ul className="flex gap-3">
							<Videoinfo.Tag icon={Music} text={"Original audio"} />
							<Videoinfo.Tag icon={Gift} text={"Send a gift"} />
						</ul>
					</List>
					{/* ----- Video Interactions ----- */}
					<List className="justify-end items-center ml-auto gap-6 text-zinc-50 col-span-1 select-none">
						<Interaction text="137K" onClick={handleIsLiked}>
							<Heart
								size={30}
								strokeWidth={1.5}
								className={`transition-colors
                  ${isLiked && "fill-rose-600 text-rose-600"}
                  ${isLiked ?? "text-zinc-50 fill-transparent"}
                `}
							/>
						</Interaction>
						<Interaction text="441">
							<MessageCircle
								size={30}
								strokeWidth={1.5}
								onClick={() => changeModalContent(<Comments />)}
							/>
						</Interaction>
						<Interaction text="73.3k">
							<Send
								size={30}
								strokeWidth={1.5}
								onClick={() => changeModalContent(<SendForFriend />)}
							/>
						</Interaction>
						<Interaction>
							<EllipsisVertical
								size={27}
								strokeWidth={1.5}
								onClick={() => changeModalContent(<MoreActions />)}
							/>
						</Interaction>
						<Interaction>
							<img
								src="https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
								alt="user_photo"
								height={"25px"}
								width={"25px"}
								className="object-cover aspect-square object-top rounded-md outline outline-2 outline-zinc-100"
							/>
						</Interaction>
					</List>
				</div>
			</VideosContainer>
		</main>
	);
}

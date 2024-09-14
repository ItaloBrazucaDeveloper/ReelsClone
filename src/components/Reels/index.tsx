import { Suspense, forwardRef, lazy, useRef, useState } from "react";
import { Icon } from "../Icon";
import { Like } from "../Like";
import { List } from "../List";
import { Modal, type modalHandles } from "../Modal";
import FallBack from "../fallback";
import type { commentsProps } from "./Comments";
import { Interaction } from "./Interaction";
import { VideoInfo } from "./videoInfo";
import type { tagProps } from "./videoInfo/Tag";
import VideoSource, { type videoHandle } from "./videoSource";

export interface reelsProps extends commentsProps {
	src: string;
	userName: string;
	userPhoto: string;
	likes: number;
	isFollowingThisUser: boolean;
	musicPhotoAlbum?: string;
	tags?: tagProps[];
}

const Reels = forwardRef<videoHandle, reelsProps>(
	(
		{
			src = "",
			userName,
			userPhoto,
			likes,
			isFollowingThisUser,
			musicPhotoAlbum,
			tags,
			comments,
		},
		ref,
	) => {
		const Comments = lazy(async () => await import("./Comments"));
		const SendForFriend = lazy(async () => await import("./SendForFriend.tsx"));
		const MoreActions = lazy(async () => await import("./MoreActions.tsx"));

		const modalRef = useRef<modalHandles>(null);
		const [modalContent, setModalContent] = useState<React.ReactNode>(null);

		const changeModalContent = (content: React.ReactNode | null) => {
			setModalContent(content);
			modalRef.current?.openModal();
		};

		return (
			<div className="relative h-full snap-center">
				<Modal
					resizeble
					ref={modalRef}
					className="bottom-0 right-1/2 rounded-t-2xl min-h-[65%] max-h-[90%] w-full bg-zinc-800"
				>
					<Suspense fallback={<FallBack />}>{modalContent}</Suspense>
				</Modal>
				<VideoSource ref={ref} src={src} />
				<div className="absolute pt-2 pb-5 px-3 inset-0 h-full w-full grid grid-cols-5 grid-rows-2">
					<header className="flex items-center justify-end h-fit col-span-full text-3xl font-bold text-zinc-100">
						<Icon
							name="camera"
							size={30}
							strokeWidth={1.75}
							className="text-zinc-200"
						/>
					</header>
					<div className="flex flex-col justify-end items-start gap-1.5 text-zinc-50 col-span-4">
						<VideoInfo
							userInfo={{
								userPhoto: userPhoto,
								userName: userName,
							}}
							tags={tags}
							following={isFollowingThisUser}
						/>
					</div>
					<List className="justify-end items-center ml-auto gap-6 text-zinc-50 col-span-1 select-none">
						<Interaction title="Like">
							<Like
								likes={likes}
								size={30}
								style={{ textShadow: "1px 1px 1.5px #000" }}
							/>
						</Interaction>
						<Interaction
							text="441"
							title="Comments"
							style={{ textShadow: "1px 1px 1.5px #000" }}
						>
							<Icon
								name="message-circle"
								size={30}
								strokeWidth={1.5}
								onClick={() =>
									changeModalContent(<Comments comments={comments} />)
								}
							/>
						</Interaction>
						<Interaction
							text="73.3k"
							title="Share"
							style={{ textShadow: "1px 1px 1.5px #000" }}
						>
							<Icon
								name="send"
								size={30}
								strokeWidth={1.5}
								onClick={() => changeModalContent(<SendForFriend />)}
							/>
						</Interaction>
						<Interaction
							title="More..."
							style={{ textShadow: "1px 1px 1.5px #000" }}
						>
							<Icon
								name="ellipsis"
								size={27}
								strokeWidth={1.5}
								onClick={() => changeModalContent(<MoreActions />)}
							/>
						</Interaction>
						<Interaction>
							<img
								src={musicPhotoAlbum ?? userPhoto}
								alt={userName}
								height={"25px"}
								width={"25px"}
								className="object-cover aspect-square object-top rounded-md outline outline-2 outline-zinc-100"
							/>
						</Interaction>
					</List>
				</div>
			</div>
		);
	},
);

export default Reels;

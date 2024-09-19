import { Suspense, forwardRef, lazy, useRef, useState } from "react";
import { Icon } from "../Icon";
import { Like } from "../Like";
import { List } from "../List";
import Modal, { type modalHandles } from "../Modal";
import FallBack from "../fallback";
import { Interaction } from "./Interaction";
import type { commentsProps } from "./comments/index.tsx";
import { VideoInfo } from "./videoInfo";
import type { tagProps } from "./videoInfo/Tag";
import VideoSource, { type videoHandle } from "./videoSource";

export type reelsProps = {
	src: string;
	userName: string;
	userPhoto: string;
	likes: number;
	isFollowingThisUser: boolean;
	musicPhotoAlbum?: string;
	tags?: tagProps[];
} & commentsProps;

/**
 * @param src string
 * @param userName string
 * @param userPhoto string
 * @param likes number
 * @param isFollowingThisUser boolean
 * @param tags tagsProps[]
 * @param comments commentsProps
 * @return Reels Component
 *
 */

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
		const Comments = lazy(async () => await import("./comments/index.tsx"));
		const SendForFriend = lazy(async () => await import("./SendForFriend.tsx"));
		const MoreActions = lazy(async () => await import("./MoreActions.tsx"));

		const modalRef = useRef<modalHandles>(null);
		const [modalContent, setModalContent] = useState<React.ReactNode>(null);

		const changeModalContent = (content: React.ReactNode | null) => {
			setModalContent(content);
			modalRef.current?.openModal();
		};

		return (
			<div className="relative h-full snap-start">
				<Modal
					resizeble
					ref={modalRef}
					className="bottom-0 right-1/2 rounded-t-2xl min-h-[65%] max-h-[90%] w-full bg-zinc-800"
				>
					<Suspense fallback={<FallBack />}>{modalContent}</Suspense>
				</Modal>
				<VideoSource ref={ref} src={src} />
				<div className="absolute bottom-0 mb-5 ml-2.5 flex flex-col items-start gap-1.5 w-[65%] text-zinc-50">
					<VideoInfo
						userInfo={{
							userPhoto: userPhoto,
							userName: userName,
						}}
						tags={tags}
						following={isFollowingThisUser}
					/>
				</div>
				<List className="absolute bottom-0 right-0 mb-5 mr-2.5 items-center ml-auto gap-6 text-zinc-50 select-none">
					<Interaction title="Like">
						<Like
							likes={likes}
							size={30}
							style={{ textShadow: "1px 1px 1.5px #000" }}
						/>
					</Interaction>
					<Interaction
						title="Comments"
						text="441"
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
						title="Share"
						text="73.3k"
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
		);
	},
);

export default Reels;

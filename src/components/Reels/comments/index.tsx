import { useState } from "react";
import { Like } from "../../Like";
import { InsertComment, type comment } from "./InsertComment";

export type commentsProps = {
	comments?: {
		userPhotoSource: string;
		userName: string;
		text: string;
		likes: number;
	}[];
};

function Comments({ comments }: commentsProps) {
	const [commentsList, setComments] = useState(comments);
	const handleComments = (newComment: comment) => {
		setComments((oldComments) => {
			return oldComments ? [newComment, ...oldComments] : [newComment];
		});
	};

	return (
		<div className="h-full w-full">
			<h3 className="text-zinc-200 font-medium text-center border-b-2 border-zinc-700 border-opacity-15 pb-3 mb-5 -mt-2.5">
				Comments
			</h3>
			<div className="h-[27rem] overflow-y-auto scrollbar-none">
				<ul className="grid gap-8 px-4">
					{commentsList?.map(
						({ userPhotoSource, text, likes, userName }, index) => (
							<li
								key={`${userPhotoSource}_${index + 1}`}
								className={"flex gap-x-4 last:mb-48"}
							>
								<img
									height={"40rem"}
									width={"40rem"}
									src={userPhotoSource}
									alt={userName}
									className="object-cover aspect-square object-top h-fit rounded-full"
								/>
								<div className="grid gap-0.5 w-full">
									<span className="text-zinc-400 text-sm">{userName}</span>
									<p className="text-zinc-200 sm:text-sm max-w-[80%]">{text}</p>
									<div className="flex gap-5 text-zinc-400 text-sm">
										<span>Reply</span>
										<span>See translation</span>
									</div>
								</div>
								<Like size={16} likes={likes} className={"text-zinc-300"} />
							</li>
						)
					)}
				</ul>
			</div>
			<InsertComment addNewComment={handleComments} />
		</div>
	);
}

export default Comments;

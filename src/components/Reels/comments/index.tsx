import { Like } from "../../Like";
import { InsertComment } from "./InsertComment";

export function Comments() {
	return (
		<div>
			<h3 className="text-zinc-200 font-medium text-center border-b-2 border-zinc-700 border-opacity-15 pb-3 mb-5 -mt-2.5">
				Comments
			</h3>
			<ul className="grid gap-8 px-4">
				<li className="flex gap-x-4">
					<img
						height={"40rem"}
						width={"40rem"}
						src={
							"https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						alt={""}
						className="object-cover aspect-square object-top h-fit rounded-full"
					/>
					<div className="grid gap-0.5">
						<span className="text-zinc-400 text-sm">Username 2d</span>
						<p className="text-zinc-200 sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
							qui veniam rem minima amet earum quos nulla, assumenda nam,
							recusandae sapiente molestias architecto. Quae recusandae
							aspernatur harum non obcaecati adipisci.
						</p>
						<div className="flex gap-5 text-zinc-400 text-sm">
							<span>Reply</span>
							<span>See translation</span>
						</div>
					</div>
					<div className="flex items-center">
						<Like size={16} likes={0} className={"text-zinc-300"} />
					</div>
				</li>
			</ul>
			<InsertComment />
		</div>
	);
}

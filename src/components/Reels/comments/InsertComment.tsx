import { Gift, Sticker } from "lucide-react";
import { Input } from "../../Input";

export function InsertComment() {
	return (
		<footer className="absolute left-1/2 bottom-0 -translate-x-1/2 grid gap-2 mb-4 w-full bg-zinc-800">
			<ul className="flex justify-around w-full pt-2.5 border-t-2 border-zinc-700 border-opacity-15">
				<li className="max-sm:text-3xl text-2xl">❤️</li>
				<li className="max-sm:text-3xl text-2xl">🙌</li>
				<li className="max-sm:text-3xl text-2xl">🔥</li>
				<li className="max-sm:text-3xl text-2xl">👏</li>
				<li className="max-sm:text-3xl text-2xl">🥲</li>
				<li className="max-sm:text-3xl text-2xl">😍</li>
				<li className="max-sm:text-3xl text-2xl">😯</li>
				<li className="max-sm:text-3xl text-2xl">🤣</li>
			</ul>
			<div className="flex items-center justify-between gap-3 mt-2 px-3.5">
				<img
					src={
						"https://images.pexels.com/photos/5254980/pexels-photo-5254980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					alt={""}
					height={"40rem"}
					width={"40rem"}
					className="object-cover aspect-square object-top rounded-full"
				/>
				<Input type="text" placeholder="Add a comment..." className="w-[90%]" />
				<div className="flex gap-3">
					<Sticker strokeWidth={1.25} size={25} className="text-zinc-100" />
					<Gift strokeWidth={1.25} size={25} className="text-zinc-100" />
				</div>
			</div>
		</footer>
	);
}

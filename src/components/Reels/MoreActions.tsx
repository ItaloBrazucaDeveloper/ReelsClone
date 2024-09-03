import {
	BookDashed,
	Bookmark,
	CreativeCommons,
	Eye,
	EyeOff,
	Info,
	Repeat2,
	Settings2,
	TriangleAlert,
} from "lucide-react";
import { List } from "../List";
import { Interaction } from "./Interaction";

export function MoreActions() {
	return (
		<div className="w-full h-full">
			<List
				direction="row"
				className="justify-around *:h-20 *:w-20 mb-3 text-zinc-200"
			>
				<Interaction text="Save">
					<div className="grid place-items-center h-12 w-12 outline outline-2 outline-zinc-500 rounded-full">
						<Bookmark strokeWidth={1.5} />
					</div>
				</Interaction>
				<Interaction text="Remix">
					<div className="grid place-items-center h-12 w-12 outline outline-2 outline-zinc-500 rounded-full">
						<Repeat2 strokeWidth={1.5} />
					</div>
				</Interaction>
				<Interaction text="Sequence">
					<div className="grid place-items-center h-12 w-12 outline outline-2 outline-zinc-500 rounded-full">
						<BookDashed strokeWidth={1.5} />
					</div>
				</Interaction>
			</List>
			<List className="justify-around gap-3 text-zinc-300 h-full px-5 ">
				<Interaction
					text="Captions and translations"
					textSize="base"
					inlineItems
				>
					<CreativeCommons strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction
					text="Why you're seeing this post"
					textSize="base"
					inlineItems
				>
					<Info strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction text="Interested" textSize="base" inlineItems>
					<Eye strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction text="Not interested" textSize="base" inlineItems>
					<EyeOff strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction
					text="Report..."
					inlineItems
					className="text-rose-600 font-medium"
				>
					<TriangleAlert className="mr-2" />
				</Interaction>
				<Interaction
					text="Manage content preferences"
					textSize="base"
					inlineItems
				>
					<Settings2 strokeWidth={1.5} className="mr-2" />
				</Interaction>
			</List>
		</div>
	);
}

import { Icon } from "../Icon";
import { List } from "../List";
import { Interaction } from "./Interaction";

function MoreActions() {
	return (
		<div className="w-full h-full">
			<List
				direction="row"
				className="justify-around *:h-20 *:w-20 mb-3 text-zinc-200"
			>
				<Interaction text="Save">
					<div className="grid place-items-center h-12 w-12 outline outline-2 outline-zinc-500 rounded-full">
						<Icon name="bookmark" strokeWidth={1.5} />
					</div>
				</Interaction>
				<Interaction text="Remix">
					<div className="grid place-items-center h-12 w-12 outline outline-2 outline-zinc-500 rounded-full">
						<Icon name="repeat-2" strokeWidth={1.5} />
					</div>
				</Interaction>
				<Interaction text="Sequence">
					<div className="grid place-items-center h-12 w-12 outline outline-2 outline-zinc-500 rounded-full">
						<Icon name="book-dashed" strokeWidth={1.5} />
					</div>
				</Interaction>
			</List>

			<List className="justify-around gap-3 text-zinc-300 h-full px-5 ">
				<Interaction
					text="Captions and translations"
					textSize="base"
					inlineItems
				>
					<Icon name="creative-commons" strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction
					text="Why you're seeing this post"
					textSize="base"
					inlineItems
				>
					<Icon name="info" strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction text="Interested" textSize="base" inlineItems>
					<Icon name="eye" strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction text="Not interested" textSize="base" inlineItems>
					<Icon name="eye-off" strokeWidth={1.5} className="mr-2" />
				</Interaction>
				<Interaction
					text="Report..."
					inlineItems
					className="text-rose-600 font-medium"
				>
					<Icon name="triangle-alert" className="mr-2" />
				</Interaction>
				<Interaction
					text="Manage content preferences"
					textSize="base"
					inlineItems
				>
					<Icon name="settings-2" strokeWidth={1.5} className="mr-2" />
				</Interaction>
			</List>
		</div>
	);
}

export default MoreActions;

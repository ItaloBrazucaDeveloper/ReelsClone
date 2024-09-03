type reelsVideosContainerProps = {
	children: React.ReactNode;
};

export function VideosContainer({
	children: Video,
}: reelsVideosContainerProps) {
	return (
		<div className="relative max-sm:h-lvh max-sm:w-full rounded-xl *:rounded-xl h-[90%] w-[25rem] shadow-2xl shadow-zinc-600">
			{Video}
		</div>
	);
}

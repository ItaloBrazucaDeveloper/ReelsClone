export interface TagsProps {
	tags: { iconName: string; text: string }[];
}

/**
 *  @param tags TagsProps
 */
export const Tags = ({ tags }: TagsProps) => {
	return (
		<ul className="">
			{tags.map(({ iconName, text }) => (
				<li key={iconName}> {text} </li>
			))}
		</ul>
	);
};

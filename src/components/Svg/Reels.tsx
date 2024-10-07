import type { SvgProps } from './SvgProps';

export const Reels = ({
	fill = 'none',
	className = '',
	...props
}: SvgProps) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			fill={fill}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			width="24"
			height="24"
			stroke="current-color"
			viewBox="0 0 256 256"
			xmlSpace="preserve"
			{...props}
		>
			<g transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)">
				<path
					d="M 61.692 0.878 H 28.307 C 12.699 0.878 0 13.577 0 29.186 v 31.629 c 0 15.608 12.699 28.307 28.307 28.307 h 33.385 C 77.301 89.121 90 76.423 90 60.814 V 29.186 C 90 13.577 77.301 0.878 61.692 0.878 z M 81.6 25.186 H 67.854 L 58.78 8.878 h 2.912 C 71.52 8.878 79.737 15.898 81.6 25.186 z M 39.888 25.186 L 30.815 8.878 h 18.811 l 9.073 16.307 H 39.888 z M 22.186 9.825 l 8.546 15.36 H 8.4 C 9.859 17.913 15.213 12.035 22.186 9.825 z M 61.692 81.121 H 28.307 C 17.11 81.121 8 72.012 8 60.814 V 33.186 h 74 v 27.629 C 82 72.012 72.89 81.121 61.692 81.121 z"
					transform=" matrix(1 0 0 1 0 0) "
					stroke-linecap="round"
				/>
				<path
					d="M 56.367 51.97 l -17.41 -9.305 c -2.366 -1.265 -5.227 0.45 -5.227 3.133 v 18.611 c 0 2.683 2.861 4.398 5.227 3.133 l 17.41 -9.305 C 58.871 56.898 58.871 53.309 56.367 51.97 z"
					transform=" matrix(1 0 0 1 0 0) "
					stroke-linecap="round"
				/>
			</g>
		</svg>
	);
};

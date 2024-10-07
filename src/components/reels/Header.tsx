import { Camera } from 'lucide-react';

/**
 * 	@description
 */
export const Header = () => {
	return (
		<header className="flex items-center justify-between p-3 absolute top-0 z-10 w-full text-zinc-100">
			<h1 className="flex items-center text-3xl font-bold">Reels</h1>
			<Camera size={30} />
		</header>
	);
};

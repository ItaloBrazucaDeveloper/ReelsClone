import { CircleUser, Home, PlusSquare, Search } from 'lucide-react';
import { Reels } from '../Svg/Reels';

/**
 *	@description
 */
export const Navbar = () => {
	return (
		<nav className="w-full">
			<ul className="flex justify-between px-6 py-3.5 *:h-[24px] *:w-[24px] rounded-b-3xl text-zinc-200 bg-zinc-900">
				<li>
					<Home />
				</li>
				<li>
					<Search />
				</li>
				<li>
					<PlusSquare />
				</li>
				<li>
					<Reels
						fill="#fafafa"
						height={34.5}
						width={34.5}
						className="-translate-x-1 -translate-y-1"
					/>
				</li>
				<li>
					<CircleUser />
				</li>
			</ul>
		</nav>
	);
};

import VideoRoot from './components/CustomContainer';
import { Actions } from './components/reels/Actions';
import { ContainerVideos } from './components/reels/ContainerVideos';
import { Header } from './components/reels/Header';
import { Navbar } from './components/reels/Navbar';
import { Information } from './components/reels/informations';
import { Source } from './components/reels/video/Source';

export default function App() {
	return (
		<main className="flex flex-col justify-center items-center h-lvh">
			<div className="relative h-fit w-fit">
				<Header />
				<ContainerVideos>
					<VideoRoot>
						<Source src="https://videos.pexels.com/video-files/3371612/3371612-hd_1080_1920_30fps.mp4" />
						<Actions
							likes={1200}
							comments={120432}
							shares={35400}
							albumMusicPhoto={
								'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							}
						/>
						<Information.Root className="flex flex-col gap-2 absolute bottom-0 pl-3 pb-4">
							<Information.User
								isFollowingThisUser={true}
								username="beachs_n_beautys"
								userPhoto={{
									src: 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
									alt: '',
								}}
							/>
							<Information.Description text="The beautyful place" />
							{/* <Information.Tags tags={[]} /> */}
						</Information.Root>
					</VideoRoot>
				</ContainerVideos>
				<Navbar />
			</div>
		</main>
	);
}

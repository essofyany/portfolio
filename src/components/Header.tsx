import NavTabs from './NavTabs';
import ProfileCard from './ProfileCard';

export default function Header() {
	return (
		<div class='w-full h-full flex flex-col gap-8'>
			{/* profile stripe */}
			<ProfileCard />
			{/* nav tabs */}
			<NavTabs />
		</div>
	);
}

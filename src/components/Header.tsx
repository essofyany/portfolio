import NavTabs from './NavTabs';
import ProfileCard from './ProfileCard';

export const Header = () => {
	return (
		<header className='w-full flex flex-col gap-8'>
			{/* profile stripe */}
			<ProfileCard />
			{/* nav tabs */}
			<NavTabs />
		</header>
	);
};

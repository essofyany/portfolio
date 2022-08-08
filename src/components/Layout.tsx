import { Footer } from './Footer';
import { GlassCard } from './GlassCard';
import { Header } from './Header';

export const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<div className='__wallpaper py-4 md:py-8 h-screen'>
			<div className='container h-full'>
				<div className='w-full md:w-1/2 lg:2/3 mx-auto h-full'>
					<GlassCard>
						<>
							<Header />
							<main className='w-full'>{children}</main>
							<Footer />
						</>
					</GlassCard>
				</div>
			</div>
		</div>
	);
};

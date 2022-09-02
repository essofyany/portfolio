import { useRouter } from 'next/router';
import { useTransition, animated } from 'react-spring';
import { Footer } from './Footer';
import { GlassCard } from './GlassCard';
import { Header } from './Header';

export const Layout = ({ children }: { children: JSX.Element }) => {
	const { pathname } = useRouter();
	const transition = useTransition(true, {
		from: { opacity: 0.5, scale: 0.5, y: -600 },
		enter: { opacity: 1, scale: 1, y: 1 },
		leave: { opacity: 0.5, scale: 0.5, y: 600 },
	});

	if (pathname === '/sphere') {
		return <main className='w-full'>{children}</main>;
	}

	return (
		<div className='__wallpaper py-4 md:py-8 h-screen'>
			<div className='container h-full'>
				{transition((style, item) => (
					<animated.div
						style={style}
						className='w-full md:w-1/2 lg:2/3 mx-auto h-full'>
						<GlassCard>
							<>
								<Header />
								<main className='w-full'>{children}</main>
								<Footer />
							</>
						</GlassCard>
					</animated.div>
				))}
			</div>
		</div>
	);
};

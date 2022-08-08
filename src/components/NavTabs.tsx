import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function NavTabs() {
	const { pathname } = useRouter();
	const [activePage, setActivePage] = useState(pathname);
	const navs = [
		{ name: 'About me', link: '/' },
		{ name: 'Blogs', link: '/blogs' },
		{ name: 'Projects', link: '/projects' },
	];

	return (
		<nav className='md:w-2/3 md:mx-auto'>
			<ul className='w-full flex items-center justify-between list-none'>
				{navs.map((nav, idx) => (
					<li
						key={idx}
						className='group flex flex-col justify-center items-center'>
						<Link
							onClick={() => setActivePage(nav.link)}
							href={nav.link}
							className={clsx('px-2 font-normal uppercase text-sm', {
								'text-black/50': activePage !== nav.link,
								'text-black': activePage == nav.link,
							})}>
							{nav.name}
						</Link>
						{activePage == nav.link ? (
							<>
								<div className='w-full h-0.5 bg-white rounded-md' />
								<div className='mt ml-1 w-full h-1 bg-white/10 rounded-md' />
							</>
						) : (
							<>
								<div className='w-full h-0.5 bg-white/10 rounded-md' />
								<div className='opacity-0 mt ml-1 w-full h-1 bg-white/10 rounded-md' />
							</>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}

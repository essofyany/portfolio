import { createSignal, For, Show } from 'solid-js';
import { Link, useLocation } from '@solidjs/router';
import clsx from 'clsx';

export default function NavTabs() {
	const { pathname } = useLocation();
	const [activePage, setActivePage] = createSignal(pathname);
	const navs = [
		{ name: 'About me', link: '/' },
		{ name: 'Blogs', link: '/blogs' },
		{ name: 'Projects', link: '/projects' },
	];

	return (
		<nav class='w-2/3 mx-auto'>
			<div class='w-full flex items-center justify-between list-none'>
				<For each={navs}>
					{(nav, i) => (
						<li class='group flex flex-col justify-center items-center'>
							<Link
								onClick={() => setActivePage(nav.link)}
								href={nav.link}
								class={clsx('px-2 font-normal uppercase text-sm', {
									'text-black/50': activePage() !== nav.link,
									'text-black': activePage() == nav.link,
								})}>
								{nav.name}
							</Link>
							<Show
								when={activePage() == nav.link}
								fallback={
									<>
										<div class='w-full h-0.5 bg-white/10 rounded-md' />
										<div class='opacity-0 mt ml-1 w-full h-1 bg-white/10 rounded-md' />
									</>
								}>
								<div class='w-full h-0.5 bg-white rounded-md' />
								<div class='mt ml-1 w-full h-1 bg-white/10 rounded-md' />
							</Show>
						</li>
					)}
				</For>
			</div>
		</nav>
	);
}

import { For, Show } from 'solid-js';
import clsx from 'clsx';

export default function NavTabs() {
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
							<a
								class={clsx('px-2 font-normal uppercase text-sm', {
									'text-black/50': i() > 0,
									'text-black': i() === 0,
								})}>
								{nav.name}
							</a>
							<Show
								when={i() === 0}
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

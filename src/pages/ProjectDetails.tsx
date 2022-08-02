import { useParams } from '@solidjs/router';

export default function ProjectDetailsPage() {
	const params = useParams();
	return (
		<div class='w-full my-4 pt-2 pb-10 __mainContent'>
			<h1 class='text-xl font-bold text-black leading-relaxed tracking-wide'>
				(WIP) Automatically Generate Branded Open Graph (OG) Images for Your
				Blog Posts
			</h1>
			<figure class='my-3 h-36 rounded-lg bg-white/25 overflow-hidden border border-white/25'>
				<img
					class='w-full h-full object-cover rounded-lg'
					src='https://blog.sachinchaurasiya.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655628057534%2FjX79q228w.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
					alt=''
				/>
			</figure>
			<div class='flex justify-between items-center'>
				<p class='text-sm font-medium text-black/50'>Jul 5, 2022 · 15 min</p>
				<a
					class='flex items-center gap-1 text-black/75 hover:text-black'
					href='https://www.google.com'
					target='_blank'>
					<span class='capitalize text-sm font-medium'>preview</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='13'
						height='13'
						fill='currentColor'
						class='bi bi-arrow-up-right-square'
						viewBox='0 0 16 16'>
						<path
							fill-rule='evenodd'
							d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
						/>
					</svg>
				</a>
			</div>
			<div class='my-4 w-full h-0.5 bg-black/5 rounded-full' />
			<div class='space-y-3 text-sm text-black/75'>
				<div class=''>
					<h4 class='text-lg font-semibold'>Description</h4>
					<p class='leading-relaxed tracking-wide font-medium'>
						An Open Graph (OG) image is the image social networks (such as
						Twitter and Facebook) pull from your website to create a preview
						when someone shares a link to your website.
					</p>
				</div>
				<div class=''>
					<h4 class='text-lg font-semibold'>Architecture</h4>
					<p class='leading-relaxed tracking-wide font-medium'>
						An Open Graph (OG) image is the image social networks (such as
						Twitter and Facebook) pull from your website to create a preview
						when someone shares a link to your website.
					</p>
				</div>
				<div class=''>
					<h4 class='text-lg font-semibold'>Technologies</h4>
					<p class='leading-relaxed tracking-wide font-medium'>
						An Open Graph (OG) image is the image social networks (such as
						Twitter and Facebook) pull from your website to create a preview
						when someone shares a link to your website.
					</p>
				</div>
				<div class=''>
					<h4 class='text-lg font-semibold'>
						What I've learned from this project
					</h4>
					<p class='leading-relaxed tracking-wide font-medium'>
						An Open Graph (OG) image is the image social networks (such as
						Twitter and Facebook) pull from your website to create a preview
						when someone shares a link to your website.
					</p>
				</div>
				<div class=''>
					<h4 class='text-lg font-semibold'>
						References & usefull links
					</h4>
					<p class='leading-relaxed tracking-wide font-medium'>
						An Open Graph (OG) image is the image social networks (such as
						Twitter and Facebook) pull from your website to create a preview
						when someone shares a link to your website.
					</p>
				</div>
			</div>
		</div>
	);
}

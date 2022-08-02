import { Link } from '@solidjs/router';
// import { mergeProps } from 'solid-js';

// interface BlogCardProps {
// 	title: string;
// 	date: Date;
// 	cover: string;
// 	readTime: string;
// }

export default function BlogCard() {
	// const { cover, date, readTime, title } = mergeProps(props);
	return (
		<Link
			href='/blogs/blog-id'
			class='hover:bg-white/25 cursor-pointer space-y-5 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/25'>
			<figure class='h-24 rounded-lg bg-white/25 overflow-hidden border border-white/25'>
				<img
					class='w-full h-full object-cover rounded-lg'
					src='https://blog.sachinchaurasiya.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655628057534%2FjX79q228w.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
					alt=''
				/>
			</figure>
			<div class='space-y-2'>
				<h3 class='text-sm font-semibold text-black leading-relaxed tracking-wide line-clamp-3'>
					TypeScript Utility Types: The 6 Most Useful
				</h3>
				<p class='text-xs font-medium leading-relaxed tracking-wide text-black/50'>
					May 26, 2021 · 14 min read
				</p>
			</div>
		</Link>
	);
}

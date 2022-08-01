import BlogCard from '../components/BlogCard';
// import BlogSkeleton from '../components/BlogCardSkeleton';

export default function BlogsPage() {
	return (
		<div class='w-full py-8 __mainContent'>
			<div class='w-full grid grid-cols-2 gap-4'>
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
}

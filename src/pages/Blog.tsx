// import BlogCard from '../constants/BlogCard';
import BlogSkeleton from '../components/BlogCardSkeleton';

export default function BlogPage() {
	return (
		<div class='w-full py-8 __mainContent'>
			<div class='w-full grid grid-cols-2 gap-4'>
				<BlogSkeleton />
				<BlogSkeleton />
				<BlogSkeleton />
				<BlogSkeleton />
				<BlogSkeleton />
				<BlogSkeleton />
				<BlogSkeleton />
				<BlogSkeleton />
			</div>
		</div>
	);
}

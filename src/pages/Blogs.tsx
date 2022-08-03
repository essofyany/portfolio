import BlogCard from "../components/BlogCard";
// import BlogSkeleton from '../components/BlogCardSkeleton';

export default function BlogsPage() {
  return (
    <div class="w-full my-4 pt-2 pb-10 __mainContent">
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
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

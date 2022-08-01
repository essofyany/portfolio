import ProjectCard from '../components/ProjectCard';
// import ProjectCardSkeleton from '../components/ProjectCardSkeleton';

export default function ProjectsPage() {
	return (
		<div class='w-full py-8 __mainContent'>
			<div class='w-full grid grid-cols-2 gap-4'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}

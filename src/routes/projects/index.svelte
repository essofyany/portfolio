<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import ProjectCard from '../../components/ProjectCard.svelte';
</script>

<section class="w-full mt-16 md:mt-32">
	<div class="" transition:fly={{ easing: cubicInOut, duration: 500, y: 20 }}>
		<!-- <CollectionHeader link="/posts" label="23 posts" /> -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	</div>
</section>

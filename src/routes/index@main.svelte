<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { ui } from '../context/uiStore';
	import AboutMeText from '../components/AboutMeText.svelte';
	import Navs from '../components/Navs.svelte';
	import PostCard from '../components/PostCard.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import ResourcesCard from '../components/ResourcesCard.svelte';
	import CollectionHeader from './CollectionHeader.svelte';
</script>

<!-- hero section -->
<section class="w-full h-[80vh]">
	<div
		class="relative top-[10%] md:top-[20%] md:right-1/4 md:bottom-1/4 md:left-1/4 bg-light/0 flex flex-col gap-8 "
	>
		<!-- avatar card -->
		<div class="flex items-center gap-4">
			<figure
				class="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-tl from-gold to-meant flex justify-center items-center p-0.5 md:p-1"
			>
				<img class="rounded-full w-full h-full" src="/me.jpg" alt="bilal essofyany" />
			</figure>
			<div class="flex flex-col gap-1">
				<div class="relative w-fit">
					<div class="absolute bottom-1 w-full h-2 bg-meant -skew-x-12 -skew-y-1" />
					<h1 class="relative z-10 text-light text-lg md:text-3xl font-bold">Essofyany Bilal</h1>
				</div>
				<p class="text-sm md:text-base text-gold font-light">
					Full-stack developer (Heavy Frontend)
				</p>
			</div>
		</div>
		<!-- bio -->
		<AboutMeText />
	</div>
</section>
<!-- navs -->
<div class="w-full backdrop-blur-sm py-5 sticky z-50 left-0 top-0 mb-20">
	<Navs />
</div>
<!-- posts -->
<section class="w-full">
	{#if $ui.activeNav === 'posts'}
		<div class="" transition:fly={{ easing: cubicInOut, duration: 500, y: 20 }}>
			<CollectionHeader link="/posts" label="23 posts" />
			<div class="flex flex-col gap-4">
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
		</div>
	{/if}
	{#if $ui.activeNav === 'projects'}
		<div class="" transition:fly={{ easing: cubicInOut, duration: 500, y: 20 }}>
			<CollectionHeader link="/posts" label="23 projects" />
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	{/if}
	{#if $ui.activeNav === 'resources'}
		<div class="" transition:fly={{ easing: cubicInOut, duration: 500, y: 20 }}>
			<CollectionHeader link="/posts" label="23 resources" />
			<div class="flex flex-col gap-4">
				{#each Array.from(Array(10)) as item}
					<ResourcesCard />
				{/each}
			</div>
		</div>
	{/if}
</section>

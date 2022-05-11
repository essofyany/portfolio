<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { ui } from '../context/uiStore';
	import AboutMeText from '../components/AboutMeText.svelte';
	import Navs from '../components/Navs.svelte';
	import PostCard from '../components/PostCard.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import ResourcesCard from '../components/ResourcesCard.svelte';
</script>

<!-- hero section -->
<section class="w-full h-screen" in:fly out:slide>
	<div class="absolute top-[20%] right-1/4 bottom-1/4 left-1/4  bg-light/0 flex flex-col gap-8">
		<!-- avatar card -->
		<div class="flex items-center gap-4">
			<figure
				class="w-20 h-20 rounded-full bg-gradient-to-tl from-gold to-meant flex justify-center items-center p-1"
			>
				<img class="rounded-full w-full h-full" src="/me.jpg" alt="bilal essofyany" />
			</figure>
			<div class="flex flex-col gap-1">
				<div class="relative w-fit">
					<div class="absolute bottom-1 w-full h-2 bg-meant -skew-x-12 -skew-y-1" />
					<h1 class="relative z-10 text-light text-3xl font-bold">Essofyany Bilal</h1>
				</div>
				<p class="text-gold font-light">Full-stack developer (Heavy Frontend)</p>
			</div>
		</div>
		<!-- bio -->
		<AboutMeText />
		<!-- navs -->
		<Navs />
	</div>
</section>
<!-- posts -->
<section class="w-full">
	{#if $ui.activeNav === 'posts'}
		<div class="" in:fly out:slide>
			<div class="h-12 flex justify-between text-light/60 font-medium">
				<p class="">23 Posts</p>
				<p class="">View all posts</p>
			</div>
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
		<div class="" in:fly out:slide>
			<div class="h-12 flex justify-between text-light/60 font-medium">
				<p class="">23 Projects</p>
				<p class="">View all projects</p>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	{/if}
	{#if $ui.activeNav === 'resources'}
		<div class="" in:fly out:slide>
			<div class="h-12 flex justify-between text-light/60 font-medium">
				<p class="">23 Resources</p>
				<p class="">View all resources</p>
			</div>
			<div class="flex flex-col gap-4">
				{#each Array.from(Array(10)) as item}
					<ResourcesCard />
				{/each}
			</div>
		</div>
	{/if}
</section>

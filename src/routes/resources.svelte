<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import ResourcesCard from '../components/ResourcesCard.svelte';
</script>

<section class="w-full mt-16 md:mt-32">
	<div class="" transition:fly={{ easing: cubicInOut, duration: 500, y: 20 }}>
		<div class="flex flex-col gap-4">
			<ResourcesCard />
			<ResourcesCard />
			<ResourcesCard />
			<ResourcesCard />
			<ResourcesCard />
			<ResourcesCard />
		</div>
		<div class="w-full flex justify-center my-4">
			<button
				class="w-fit bg-gradient-to-tr from-gold to-meant hover:from-meant hover:to-gold transition-all duration-200
             text-dark px-4 py-1 rounded mx-auto">Load more</button
			>
		</div>
	</div>
</section>

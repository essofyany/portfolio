<script>
	import { slide, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	let clicked = false;
</script>

<header class="w-full flex justify-between items-center pt-8 md:pt-16 bg-purple-">
	<a href="/">
		<figure
			class="w-14 h-14 rounded-full bg-gradient-to-tl from-gold to-meant flex justify-center items-center p-0.5 cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200"
		>
			<img class="rounded-full w-full h-full" src="/me.jpg" alt="bilal essofyany" />
		</figure>
	</a>
	<ul class="hidden md:flex gap-8">
		<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
			<a href="/posts" class=" text-gold group-hover:text-gold font-medium">Posts</a>
		</li>
		<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
			<a href="/projects" class=" text-light/60 group-hover:text-gold font-medium">Projects</a>
		</li>
		<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
			<a href="/resources" class=" text-light/60 group-hover:text-gold font-medium">Resources</a>
		</li>
		<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
			<a href="/about" class=" text-light/60 group-hover:text-gold font-medium">About</a>
		</li>
	</ul>
	<button on:click={() => (clicked = !clicked)}>
		{#if !clicked}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				fill="currentColor"
				class="fill-gradient-to-br fill-gold to-meant"
				viewBox="0 0 16 16"
				transition:slide={{ duration: 500 }}
			>
				<path
					fill-rule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				fill="currentColor"
				class="fill-gradient-to-br fill-lightRed"
				viewBox="0 0 16 16"
				transition:slide={{ duration: 500 }}
			>
				<path
					d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
				/>
			</svg>
		{/if}
	</button>
</header>
{#if clicked}
	<div class="w-full mt-8" transition:slide={{ duration: 700, easing: cubicInOut }}>
		<ul class="flex justify-between">
			<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
				<a href="/posts" class="text-sm text-gold group-hover:text-gold font-medium">Posts</a>
			</li>
			<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
				<a href="/projects" class="text-sm text-light/60 group-hover:text-gold font-medium"
					>Projects</a
				>
			</li>
			<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
				<a href="/resources" class="text-sm text-light/60 group-hover:text-gold font-medium"
					>Resources</a
				>
			</li>
			<li class="group cursor-pointer hover:shadow-xl hover:shadow-gold/10 duration-200">
				<a href="/about" class="text-sm text-light/60 group-hover:text-gold font-medium">About</a>
			</li>
		</ul>
	</div>
{/if}

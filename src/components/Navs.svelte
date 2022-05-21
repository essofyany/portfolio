<script lang="ts">
	import { ui, type ActiveNavType } from '../context/uiStore';

	function setActiveNav(nav: ActiveNavType) {
		ui.update((prev) => ({ ...prev, activeNav: nav }));
	}
	const navs: { icon: string; name: ActiveNavType; link?: string }[] = [
		{ name: 'posts', icon: '/icons/Document.svg' },
		{ name: 'projects', icon: '/icons/Discovery.svg' },
		{ name: 'resources', icon: '/icons/Star.svg' },
		{ name: 'about', icon: '/icons/User.svg', link: '/about' }
	];
</script>

<ul class="w-full flex gap-10 md:gap-24 text-black">
	{#each navs as { icon, name, link }}
		<li on:click={() => setActiveNav(name)} class="flex-1">
			<a
				href={link}
				class={`group w-5 h-5 md:w-7 md:h-7 p-1 md:p-[6px] bg-gradient-to-tl from-gold to-meant rounded-md md:rounded-lg flex items-center gap-3 cursor-pointer shadow-xl ${
					name === $ui.activeNav ? 'shadow-gold/20' : 'shadow-none'
				}  duration-200`}
			>
				<img src={icon} alt="about me" />
				<p
					class={`text-sm md:text-base capitalize ${
						name === $ui.activeNav ? 'text-gold' : 'text-light/60'
					} group-hover:text-gold font-medium duration-200`}
				>
					{name}
				</p>
			</a>
		</li>
	{/each}
</ul>

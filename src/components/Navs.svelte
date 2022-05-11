<script lang="ts">
	import { ui, type ActiveNavType } from '../context/uiStore';

	function setActiveNav(nav: ActiveNavType) {
		ui.update((prev) => ({ ...prev, activeNav: nav }));
	}
	const navs: { icon: string; name: ActiveNavType }[] = [
		{ name: 'posts', icon: '/icons/Document.svg' },
		{ name: 'projects', icon: '/icons/Discovery.svg' },
		{ name: 'resources', icon: '/icons/Star.svg' },
		{ name: 'about', icon: '/icons/User.svg' }
	];
</script>

<ul class="flex gap-24 text-black mt-10">
	{#each navs as { icon, name }}
		<li
			on:click={() => setActiveNav(name)}
			class={`group w-7 h-7 p-[6px] bg-gradient-to-tl from-gold to-meant rounded-lg flex items-center gap-3 cursor-pointer shadow-xl ${
				name === $ui.activeNav ? 'shadow-gold/20' : 'shadow-none'
			}  duration-200`}
		>
			<img src={icon} alt="about me" />
			<p
				class={`capitalize ${
					name === $ui.activeNav ? 'text-gold' : 'text-light/60'
				} group-hover:text-gold font-medium duration-200`}
			>
				{name}
			</p>
		</li>
	{/each}
</ul>

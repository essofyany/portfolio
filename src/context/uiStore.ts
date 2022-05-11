import { writable } from 'svelte/store';

export type ActiveNavType = 'posts' | 'projects' | 'resources' | 'about';
interface UI {
	activeNav: ActiveNavType;
}

export const ui = writable<UI>({
	activeNav: 'posts'
});

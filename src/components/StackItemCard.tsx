import { mergeProps } from 'solid-js';

export default function StackItemCard(props: { name: string; icon: string }) {
	const merged = mergeProps({ name: '', icon: '' }, props);
	return (
		<div class='overflow-hidden relative w-24 h-24 p-4 bg-white/10 shadow-xl backdrop-blur-sm rounded border border-white/25'>
			<img src={merged.icon} alt={merged.name} />
			<div class='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_5s_2s_infinite]' />
		</div>
	);
}

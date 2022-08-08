export default function StackItemCard({
	icon,
	name,
}: {
	name: string;
	icon: string;
}) {
	return (
		<div className='overflow-hidden relative w-24 h-24 p-4 bg-white/10 shadow-xl backdrop-blur-sm rounded-xl border border-white/25'>
			<img src={icon} alt={name} />
			<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_5s_2s_infinite]' />
		</div>
	);
}

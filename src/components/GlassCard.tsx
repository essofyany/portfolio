export const GlassCard = ({ children }: { children: JSX.Element }) => {
	return (
		<div className='relative w-full h-full bg-white/25 shadow-xl backdrop-blur-sm rounded border border-white/25 p-8'>
			{children}
		</div>
	);
};

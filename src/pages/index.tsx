import StackItemCard from '../components/StackItemCard';
import {
	backendStackList,
	frontendStackList,
	learningList,
} from '../constants/icons';

export default function HomePage() {
	return (
		<div className='w-full my-4 pt-2 pb-10 __mainContent'>
			<p className='leading-relaxed tracking-wide first-letter:uppercase first-letter:text-xl text-justify font-medium text-black/70'>
				I am a self-taught Full Stack JavaScript Developer. I enjoy connecting
				with people to share ideas and knowledge. My strength lies in a
				combination of self-learning and consistency to improve myself. I love
				and believe in open source and building side projects.
			</p>
			<div className='w-fit'>
				<h4 className='mt-4 text-lg font-medium text-black'>
					My Frontend stack:
				</h4>
				<div className='w-full h-0.5 bg-white/75 rounded-md' />
				<div className='mt ml-1 w-full h-1 bg-white/25 rounded-md' />
			</div>
			<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 mt-4'>
				{frontendStackList.map(({ icon, name }, index) => (
					<StackItemCard key={index} name={name} icon={icon} />
				))}
			</div>
			<div className='w-fit mt-4'>
				<h4 className='mt-4 text-lg font-medium text-black'>
					My Backend stack:
				</h4>
				<div className='w-full h-0.5 bg-white/75 rounded-md' />
				<div className='mt ml-1 w-full h-1 bg-white/25 rounded-md' />
			</div>
			<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 mt-4'>
				{backendStackList.map(({ icon, name }, index) => (
					<StackItemCard key={index} name={name} icon={icon} />
				))}
			</div>
			<div className='w-fit mt-4'>
				<h4 className='mt-4 text-lg font-medium text-black'>
					I am currently learning:
				</h4>
				<div className='w-full h-0.5 bg-white/75 rounded-md' />
				<div className='mt ml-1 w-full h-1 bg-white/25 rounded-md' />
			</div>
			<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 mt-4'>
				{learningList.map(({ icon, name }, index) => (
					<StackItemCard key={index} name={name} icon={icon} />
				))}
			</div>
		</div>
	);
}

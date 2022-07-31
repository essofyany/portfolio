import GlassCard from '../components/GlassCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomePage() {
	return (
		<div class='w-1/2 mx-auto h-full'>
			<GlassCard>
				<Header />
				{/* main content */}
				<Footer />
			</GlassCard>
		</div>
	);
}

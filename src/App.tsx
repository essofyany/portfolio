import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Layout from './components/Layout';
import HomePage from './pages/Home';

const App: Component = () => {
	return (
		<div class='__wallpaper container py-8 h-screen'>
			<Layout>
				<Routes>
					<Route path='/' component={HomePage} />
					<Route
						path='/about'
						element={<div>This site was made with Solid</div>}
					/>
				</Routes>
			</Layout>
		</div>
	);
};

export default App;

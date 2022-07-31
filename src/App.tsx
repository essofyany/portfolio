import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import HomePage from './pages/Home';

const App: Component = () => {
	return (
		<div class='__wallpaper container py-8 h-screen'>
			<Routes>
				<Route path='/' component={HomePage} />
				<Route
					path='/about'
					element={<div>This site was made with Solid</div>}
				/>
			</Routes>
		</div>
	);
};

export default App;

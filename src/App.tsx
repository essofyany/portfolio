import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Layout from './components/Layout';
import BlogPage from './pages/Blog';
import HomePage from './pages/Home';

const App: Component = () => {
	return (
		<div class='__wallpaper container py-8 h-screen'>
			<Layout>
				<Routes>
					<Route path='/' component={HomePage} />
					<Route path='/blogs' component={BlogPage} />
				</Routes>
			</Layout>
		</div>
	);
};

export default App;

import { Link, MetaProvider, Title } from '@solidjs/meta';
import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Layout from './components/Layout';
import BlogsPage from './pages/Blogs';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';

const App: Component = () => {
	return (
		<MetaProvider>
			<Title>Bilal Essofyany | Welcome </Title>
			<Link rel='canonical' href='http://essofyany.me/' />
			<div class='__wallpaper container py-8 h-screen'>
				<Layout>
					<Routes>
						<Route path='/' component={HomePage} />
						<Route path='/blogs' component={BlogsPage} />
						<Route path='/projects' component={ProjectsPage} />
					</Routes>
				</Layout>
			</div>
		</MetaProvider>
	);
};

export default App;

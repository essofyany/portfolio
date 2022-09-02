import {
	Cloud,
	fetchSimpleIcons,
	IOptions,
	renderSimpleIcon,
	SimpleIcon,
} from 'react-icon-cloud';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

interface FetchedIcons {
	simpleIcons: Record<string, SimpleIcon>;
	allIcon: Record<
		string,
		{
			title: string;
			hex: string;
			slug: string;
		}
	>;
}

const useIcons = (slugs: string[]) => {
	const [icons, setIcons] = useState<FetchedIcons>();
	useEffect(() => {
		fetchSimpleIcons({ slugs }).then((res) => {
			setIcons(res);
			console.log(res);
		});
	}, [slugs]);

	if (icons) {
		return Object.values(icons.simpleIcons).map((icon) =>
			renderSimpleIcon({
				icon,
				size: 50,
				aProps: {
					onClick: (e: any) => e.preventDefault(),
				},
				minContrastRatio: 1,
			}),
		);
	}

	return <a>Loading</a>;
};

const slugs = [
	'react',
	'remix',
	'html5',
	'css3',
	'javascript',
	'typescript',
	'graphql',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'canva',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'chakraui',
	'git',
	'github',
	'githubactions',
	'visualstudiocode',
	'figma',
	'nestjs',
	'supabase',
	'tailwindcss',
	'angular',
	'svelte',
	'mongodb',
];

export const Sphere = () => {
	const icons = useIcons(slugs);
	const options: IOptions = {
		clickToFront: 500,
		depth: 1,
		dragControl: true,
		dragThreshold: 150,
		fadeIn: 100,
		freezeActive: true,
		freezeDecel: true,
		frontSelect: true,
		imageAlign: 'centre',
		imageScale: 2,
		initial: [0.1, -0.1],
		outlineColour: '#0000',
		repeatTagsTags: 0,
		reverse: true,
		shape: 'sphere',
		shuffleTags: true,
		tooltip: 'native',
		tooltipDelay: 0,
		wheelZoom: false,
	};

	return (
		<Cloud options={options} id={v4()}>
			{icons}
		</Cloud>
	);
};

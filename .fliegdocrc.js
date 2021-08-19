module.exports = {
	baseUrl: '/',
	outDir: './docs',
	readme: './README.md',
	modules: [
		{
			package: './package.json',
			tsconfig: './tsconfig.json',
			mainFile: 'index.ts'
		}
	],
	title: 'Server State TypeScript types',
	externalLinks: {
		GitHub: 'https://github.com/server-state/types/',
		Homepage: 'https://www.server-state.tech/',
		'Legal Notice': 'https://www.fliegwerk.com/legal'
	}
};

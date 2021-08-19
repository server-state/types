const path = require('path');

module.exports = {
	root: true,
	globals: {
		// global TypeScript namespace
		ServerStateTypes: 'readonly'
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: [path.join(__dirname, 'tsconfig.json')]
	},
	extends: [path.join(__dirname, '..', '.eslintrc.js')],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		// documentation
		'tsdoc/syntax': 'off',
		'jsdoc/require-jsdoc': 'off'
	},
	ignorePatterns: ['sample', 'types']
};

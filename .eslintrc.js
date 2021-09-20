const path = require('path');

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: path.join(__dirname, 'tsconfig.json')
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es2020: true
	},
	globals: {
		NodeJS: 'readonly'
	},
	plugins: ['@typescript-eslint', 'tsdoc', 'jsdoc', 'prettier'],
	extends: [
		'eslint:recommended',
		'airbnb',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'plugin:prettier/recommended'
	],
	rules: {
		// Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'off',
		'no-bitwise': 'warn',
		// why not?
		'no-plusplus': 'off',
		// Use function hoisting to improve code readability
		'no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true }
		],
		// allow voids as statements
		// https://eslint.org/docs/rules/no-void
		'no-void': [
			'error',
			{
				allowAsStatement: true
			}
		],
		// eslint does not detect exported members properly
		'no-unused-vars': 'off',
		// why not?
		'@typescript-eslint/no-this-alias': 'off',
		// Makes no sense to allow type inference for expression parameters, but require typing the response
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{ allowExpressions: true, allowTypedFunctionExpressions: true }
		],
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true, typedefs: true }
		],
		// if you use explicit any type, you know what you are doing
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		// allow numeric types in template expressions
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowAny: true
			}
		],
		// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		// documentation via fliegdoc
		'tsdoc/syntax': 'error',
		'@typescript-eslint/no-inferrable-types': 0,
		'jsdoc/require-jsdoc': [
			'error',
			{
				contexts: [
					'TSInterfaceDeclaration',
					'TSTypeAliasDeclaration',
					'TSEnumDeclaration'
				]
			}
		],
		'jsdoc/require-description': 1,
		'jsdoc/require-param-description': 'error',
		'jsdoc/require-hyphen-before-param-description': 'error',
		'jsdoc/no-types': 'error',
		'jsdoc/require-throws': 'error',
		'jsdoc/require-param-type': 0,
		'jsdoc/require-property-type': 0,
		'jsdoc/require-returns-type': 0,
		'jsdoc/require-example': 2,
		// treat wrong format as warning instead of error
		// to inform the user and not slap him
		'prettier/prettier': 'warn'
	},
	ignorePatterns: ['scripts', 'sample', 'types', '.eslintrc.js', 'docs'],
	overrides: [
		{
			files: ['src/index.ts'],
			rules: {
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-unused-vars': 'off'
			}
		}
	]
};

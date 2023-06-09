module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['next', 'next/core-web-vitals', 'prettier'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['prettier', 'simple-import-sort'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'react-hooks/exhaustive-deps': 'error',
		'prettier/prettier': 'error',
		camelcase: 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-unused-prop-types': 'off',
		'react/require-default-props': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
	},
	overrides: [
		{
			files: '**/*.+(ts|tsx)',
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint/eslint-plugin'],
			extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'no-use-before-define': [0],
				'@typescript-eslint/no-use-before-define': [1],
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/ban-ts-comment': 0,
			},
		},
	],
}

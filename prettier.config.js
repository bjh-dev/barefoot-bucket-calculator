// prettier.config.js or .prettierrc.js
module.exports = {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketLine: true,
	arrowParens: 'always',
	plugins: [
		require('prettier-plugin-organize-attributes'),
		require('prettier-plugin-css-order'),
		require('prettier-plugin-style-order'),
		require('prettier-plugin-organize-imports'),
		require('prettier-plugin-tailwindcss'), // must come last
	],
	pluginSearchDirs: false,
}

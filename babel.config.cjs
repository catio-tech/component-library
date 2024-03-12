/**
 * Babel configuration needed to enable Jest and TypeScript to play together.
 * See more at: https://jestjs.io/docs/getting-started
 */
const babelConfig = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-syntax-import-attributes',
      { deprecatedAssertSyntax: true },
    ],
  ],
};

module.exports = babelConfig;

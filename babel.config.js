/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@views': './src/views',
          '@utils': './src/utils',
          '@ui': './src/ui',
        },
      },
    ],
  ],
};

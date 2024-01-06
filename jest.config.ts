import {Config} from '@jest/types';
import {defaults as tsjPreset} from 'ts-jest/presets';

const config: Config.InitialOptions = {
  ...tsjPreset,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@src/(.*)': '<rootDir>/src/$1',
    '^@assets(.*)$': '<rootDir>/src/assets/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@config(.*)$': '<rootDir>/src/config/$1',
    '^@models(.*)$': '<rootDir>/src/models/$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation/$1',
    '^@screens(.*)$': '<rootDir>/src/screens/$1',
    '^@ui(.*)$': '<rootDir>/src/ui/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
  },
  // setupFilesAfterEnv: ['<rootDir>/src/setupFilesAfterEnv.ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testRegex: '/test/.*spec\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  verbose: true,
};

export default config;

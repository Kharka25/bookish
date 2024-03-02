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
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@config(.*)$': '<rootDir>/src/config/$1',
    '^@models(.*)$': '<rootDir>/src/models/$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation/$1',
    '^@screens(.*)$': '<rootDir>/src/screens/$1',
    '^@ui(.*)$': '<rootDir>/src/ui/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testEnvironment: 'node',
  testRegex: '/__test__/.*spec\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',
  ],
  // transformIgnorePatterns: [
  //   // 'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',
  //   'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  // ],
  verbose: true,
};

export default config;

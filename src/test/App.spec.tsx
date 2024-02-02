/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {View} from 'react-native';
import {render, screen} from '@testing-library/react-native';

import {Provider} from 'react-redux';

import App from '..';
import {setupStore} from '../store/store';
import {RootNavigator} from '@navigation';

const store = setupStore();

jest.mock('../navigation/RootNavigator', () => jest.fn());
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual<object>('react-redux'),
    Provider: jest.fn(),
  };
});

describe('App', () => {
  it('renders routes', () => {
    (Provider as jest.Mock).mockImplementationOnce(({children}) => children);

    (RootNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );

    render(<App />);
    screen.getByTestId('mock-routes');
  });

  it('renders Provider', () => {
    let providerStore!: typeof store;

    (Provider as jest.Mock).mockImplementationOnce(({store}) => {
      providerStore = store;
      return <View testID="mock-provider" />;
    });

    render(<App />);
    screen.getByTestId('mock-provider');
    expect(Object.keys(providerStore)).toEqual(Object.keys(store));
  });
});

import React from 'react';
import {View} from 'react-native';
import {render, screen} from '@testing-library/react-native';

import App from '..';

import {RootNavigator} from '@navigation';

jest.mock('../navigation/RootNavigator', () => jest.fn());
jest.mock('../services/appcenter', () => jest.fn());

describe('App', () => {
  test('it renders routes', () => {
    (RootNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );

    render(<App />);
    screen.getByTestId('mock-routes');
  });
});

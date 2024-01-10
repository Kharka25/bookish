import React from 'react';
import {render, screen as screenFn} from '@testing-library/react-native';
import {View} from 'react-native';

import App from '../App';
import {AuthNavigator} from '@navigation';

jest.mock('../navigation/AuthNavigator', () => jest.fn());

describe('App', () => {
  it('renders routes', () => {
    (AuthNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );

    render(<App />);
    screenFn.getByTestId('mock-routes');
  });
});

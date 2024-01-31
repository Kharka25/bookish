import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  render,
  screen as screenFn,
  waitFor,
} from '@testing-library/react-native';

import {AppNavigator} from '@navigation';
import {Home, Status} from '@screens';

jest.mock('../../screens/app/Home/home', () => jest.fn());
jest.mock('../../screens/app/status', () => jest.fn());

describe('App Navigator', () => {
  it('renders Home screen as initial screen', async () => {
    (Home as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-home-screen" />,
    );

    render(<AppNavigator />);

    await waitFor(() => {
      screenFn.getByTestId('mock-home-screen');
    });
  });

  it('renders Status screen in App routes', async () => {
    (Status as unknown as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-status-screen" />,
    );

    render(<AppNavigator />);

    await waitFor(() => {
      screenFn.getByTestId('mock-home-screen');
    });
  });
});

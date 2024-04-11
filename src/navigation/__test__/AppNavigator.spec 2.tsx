import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  render,
  screen as screenFn,
  waitFor,
} from '@testing-library/react-native';

import {Home, Status} from '@screens';
import MockedNavigator from '@utils/mockednavigator';

jest.mock('../../screens/app/Home/home', () => jest.fn());
jest.mock('../../screens/app/status', () => jest.fn());

describe('App Screen Navigation', () => {
  it('renders Home screen as initial screen', async () => {
    (Home as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-home-screen" />,
    );

    render(<MockedNavigator component={Home} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-home-screen');
    });
  });

  it('renders Status screen in App routes', async () => {
    (Status as unknown as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-status-screen" />,
    );

    render(<MockedNavigator component={Status} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-status-screen');
    });
  });
});

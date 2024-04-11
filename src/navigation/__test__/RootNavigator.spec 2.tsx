import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootNavigator} from '@navigation';
import MockedNavigator from '@utils/mockednavigator';

jest.mock('../RootNavigator', () => jest.fn());

describe('Root Navigator', () => {
  it('renders AppNavigator', async () => {
    (RootNavigator as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-app-navigator" />,
    );
    render(<MockedNavigator component={RootNavigator} />);

    await waitFor(() => {
      screen.getByTestId('mock-app-navigator');
    });
  });
});

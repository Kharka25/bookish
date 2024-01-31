import React from 'react';
import {View} from 'react-native';

import App from '../App';
import {RootNavigator} from '@navigation';
import {render} from '@testing-library/react-native';

jest.mock('../navigation/RootNavigator', () => jest.fn());
// jest.mock('react-redux', () => {
//   return {
//     ...jest.requireActual<object>('react-redux'),
//     Provider: jest.fn(),
//   };
// });

describe('App', () => {
  it('renders routes', () => {
    (RootNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );
    const wrapper = render(<App />);
    wrapper.getByTestId('mock-routes');
  });
});

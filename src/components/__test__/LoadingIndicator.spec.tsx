import React from 'react';
import {render} from '@testing-library/react-native';

import {LoadingIndicator} from '@components';
import {Colors} from '@constants/colors';

describe('Loading Indicator', () => {
  it('renders correctly', () => {
    const wrapper = render(<LoadingIndicator color={Colors.WHITE} size={24} />);
    wrapper.getByTestId('loadingIndicator');
  });

  it('renders with icon', () => {
    const wrapper = render(<LoadingIndicator color={Colors.WHITE} size={24} />);
    expect(wrapper.getByTestId('loadingIndicator')).toContainElement(
      wrapper.getByTestId('icon'),
    );
  });
});

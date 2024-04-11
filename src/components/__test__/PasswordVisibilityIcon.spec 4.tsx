import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {PasswordVisibilityIcon} from '@components';
import {Colors} from '@constants/colors';

describe('Password Visibility Icon', () => {
  it('renders correctly', () => {
    render(<PasswordVisibilityIcon />);
    screen.getByTestId('visiblity-toggle');
  });

  it('renders with correct style', () => {
    render(<PasswordVisibilityIcon />);
    expect(screen.getByTestId('visiblity-toggle')).toHaveProp('style');
    expect(screen.getByTestId('visiblity-toggle')).toHaveStyle({
      fontSize: 16,
      color: Colors.GRAY_40,
    });
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {ResetPassword} from '@screens';

describe('Reset Password', () => {
  it('renders correctly', () => {
    render(<ResetPassword />);
    screen.getByTestId('reset-password');
  });
});

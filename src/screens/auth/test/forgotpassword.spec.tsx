import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {ForgotPassword} from '@screens';

describe('Forgot Password', () => {
  it('renders correctly', () => {
    render(<ForgotPassword />);
    screen.getByTestId('forgot-password');
  });
});

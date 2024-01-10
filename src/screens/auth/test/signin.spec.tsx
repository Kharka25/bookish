import React from 'react';
import {render, screen as screenFn} from '@testing-library/react-native';

import {SignIn} from '@screens';

describe('Sign In screen', () => {
  it('renders correctly', () => {
    render(<SignIn />);
    screenFn.getByTestId('signin-screen');
  });
});

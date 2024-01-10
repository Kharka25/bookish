import React from 'react';
import {render, screen as screenFn} from '@testing-library/react-native';

import {SignUp} from '@screens';

describe('SignUp screen', () => {
  it('renders correctly', () => {
    render(<SignUp />);
    screenFn.getByTestId('signup-screen');
  });
});

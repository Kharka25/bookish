import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {PasswordConditionCheck} from '@components';
import {testValidData} from '@utils/test/helpers.spec';

describe('Password Condition Check', () => {
  it('renders correctly', () => {
    render(<PasswordConditionCheck conditions={testValidData} />);
    screen.getByTestId('password-checker');
  });
});

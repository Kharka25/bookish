import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {AuthInput} from '@components';

describe('Auth Input', () => {
  it('renders correctly', () => {
    render(<AuthInput />);
    screen.getByTestId('auth-input');
  });

  it('renders a textInput component', () => {
    render(<AuthInput />);
    screen.getByTestId('text-input');
  });

  it('display a label when label prop is passed', () => {
    render(<AuthInput label="label" />);
    screen.getByText('label');
  });

  it('displays a placeholder text when passed a props', () => {
    render(<AuthInput placeholder="placeholder" />);
    const authInput = screen.getByTestId('text-input');
    expect(authInput).toHaveProp('placeholder');
  });

  it('displays a password visiblity toggle icon when rightIcon props is passed', () => {
    render(<AuthInput rightIcon />);
    screen.getByRole('button');
  });

  it('displays rightIcon with correct styles', () => {
    render(<AuthInput rightIcon />);
    const rightIcon = screen.getByRole('button');
    expect(rightIcon).toHaveStyle({right: 0, top: 2});
  });
});

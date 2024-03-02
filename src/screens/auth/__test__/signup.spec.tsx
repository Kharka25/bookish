import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  render,
  screen as screenFn,
  userEvent,
  waitFor,
} from '@testing-library/react-native';

import {SignUp} from '@screens';
import {fontScale} from '@utils/responsiveDesign';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('SignUp screen', () => {
  it('renders correctly', () => {
    render(<SignUp />);
    screenFn.getByTestId('signup-screen');
  });

  it('displays Sign Up text', () => {
    render(<SignUp />);
    screenFn.getByText('Sign Up');
  });

  it('renders Sign Up text with correct style', () => {
    render(<SignUp />);
    const signUpTxt = screenFn.getByText('Sign Up');
    expect(signUpTxt).toHaveStyle({fontSize: fontScale(24)});
  });

  it('displays Create an account text', async () => {
    render(<SignUp />);
    screenFn.getByText('Create an account and start your Bookish adventure!');
  });

  it('displays subheading text with correct style', () => {
    render(<SignUp />);
    const subHeadingTxt = screenFn.getByText(
      'Create an account and start your Bookish adventure!',
    );
    expect(subHeadingTxt).toHaveStyle({fontWeight: '400'});
  });

  it('renders goBack btn', () => {
    render(<SignUp />);
    screenFn.getByTestId('goBack-btn');
  });

  it('renders username text input', () => {
    render(<SignUp />);
    const input = screenFn.getByPlaceholderText('Your name');
    expect(input).toBeOnTheScreen();
  });

  it('renders name text input', () => {
    render(<SignUp />);
    const input = screenFn.getByLabelText('name');
    expect(input).toBeOnTheScreen();
  });

  it('renders user email text input', () => {
    render(<SignUp />);
    const input = screenFn.getByPlaceholderText('Your email');
    expect(input).toBeOnTheScreen();
  });

  it('renders email text input', () => {
    render(<SignUp />);
    const input = screenFn.getByLabelText('email');
    expect(input).toBeOnTheScreen();
  });

  it('renders user password text input', () => {
    render(<SignUp />);
    const input = screenFn.getByPlaceholderText('Your password');
    expect(input).toBeOnTheScreen();
  });

  it('renders password text input', () => {
    render(<SignUp />);
    const input = screenFn.getByLabelText('password');
    expect(input).toBeOnTheScreen();
  });

  it('renders a button component', () => {
    render(<SignUp />);
    screenFn.queryByTestId('btn');
  });

  it('renders Register button component', () => {
    render(<SignUp />);
    screenFn.getByText('Register');
  });

  it('displays sign in option text', () => {
    render(<SignUp />);
    screenFn.getByText('Sign In');
  });

  it('displays sign in text as link', () => {
    render(<SignUp />);
    expect(screenFn.getByTestId('link')).toBeDefined();
  });

  it('navigates to Sign In screen when signIn link is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<SignUp />);
    const signInLink = screenFn.getByTestId('link');
    userEvent.press(signInLink);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('displays footer text for Terms and Data Policy', () => {
    render(<SignUp />);
    screenFn.getByText('By clicking Register', {exact: false});
  });

  it('displays footer text with correct style', () => {
    render(<SignUp />);
    const footerText = screenFn.getByText('By clicking Register', {
      exact: false,
    });

    expect(footerText).toHaveStyle({fontWeight: '500'});
  });

  it('displays Terms and Data Policy link', () => {
    render(<SignUp />);
    screenFn.getByText('Terms and Data', {exact: false});
  });

  // test for terms and data policy link being clicked.
});

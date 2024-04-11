import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  renderWithProviders,
  screen as screenFn,
  userEvent,
  waitFor,
} from '@utils/test-utils';
import {SignIn} from '@screens';
import {fontScale} from '@utils/responsiveDesign';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Sign In screen', () => {
  it('renders correctly', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByTestId('signin-screen');
  });

  it('displays Welcome text', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByText('Welcome Back');
  });

  it('renders Welcome text with correct style', () => {
    renderWithProviders(<SignIn />);
    const signUpTxt = screenFn.getByText('Welcome Back');
    expect(signUpTxt).toHaveStyle({fontSize: fontScale(24)});
  });

  it('displays Sign in to your account', async () => {
    renderWithProviders(<SignIn />);
    screenFn.getByText('Sign in to your account');
  });

  it('displays subheading text with correct style', () => {
    renderWithProviders(<SignIn />);
    const subHeadingTxt = screenFn.getByText('Sign in to your account');
    expect(subHeadingTxt).toHaveStyle({fontWeight: '400'});
  });

  it('renders goBack btn', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByTestId('goBack-btn');
  });

  it('renders 2 textInput components', () => {
    renderWithProviders(<SignIn />);
    const textInputs = screenFn.queryAllByTestId('auth-input');
    expect(textInputs).toHaveLength(2);
  });

  it('renders "Forgot Password?" link', () => {
    renderWithProviders(<SignIn />);
    const links = screenFn.queryAllByTestId('link');
    expect(links[0]).toHaveTextContent('Forgot Password?', {exact: false});
  });

  it('navigates to Forgot Password screen when forgot password link is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    renderWithProviders(<SignIn />);
    const links = screenFn.queryAllByTestId('link');
    const forgotPasswordLink = links[0];
    userEvent.press(forgotPasswordLink);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('renders a button component', () => {
    renderWithProviders(<SignIn />);
    expect(screenFn.queryAllByTestId('btn')).toBeDefined();
  });

  it('renders Login button component', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByText('Login');
  });

  it('displays sign up text as link', () => {
    renderWithProviders(<SignIn />);
    const links = screenFn.queryAllByTestId('link');
    expect(links[1]).toHaveTextContent('Sign Up', {exact: false});
  });

  it('navigates to Sign Up screen when signIn link is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    renderWithProviders(<SignIn />);

    const links = screenFn.queryAllByTestId('link');
    const signUpLink = links[1];
    userEvent.press(signUpLink);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('display lineBreak component', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByTestId('separator');
  });

  it('displays Google signin button', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByText('Sign in with Google');
  });

  it('displays Apple signin button', () => {
    renderWithProviders(<SignIn />);
    screenFn.getByText('Sign in with Apple');
  });
});

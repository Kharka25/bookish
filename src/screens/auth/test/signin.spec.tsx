import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  // fireEvent,
  render,
  screen as screenFn,
  userEvent,
  waitFor,
} from '@testing-library/react-native';

import {SignIn} from '@screens';
import {fontScale} from '@utils/responsiveDesign';

// jest.mock('../signup/signup', () => jest.fn());

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Sign In screen', () => {
  it('renders correctly', () => {
    render(<SignIn />);
    screenFn.getByTestId('signin-screen');
  });

  it('displays Welcome text', () => {
    render(<SignIn />);
    screenFn.getByText('Welcome Back');
  });

  it('renders Welcome text with correct style', () => {
    render(<SignIn />);
    const signUpTxt = screenFn.getByText('Welcome Back');
    expect(signUpTxt).toHaveStyle({fontSize: fontScale(24)});
  });

  it('displays Sign in to your account', async () => {
    render(<SignIn />);
    screenFn.getByText('Sign in to your account');
  });

  it('displays subheading text with correct style', () => {
    render(<SignIn />);
    const subHeadingTxt = screenFn.getByText('Sign in to your account');
    expect(subHeadingTxt).toHaveStyle({fontWeight: '400'});
  });

  it('renders goBack btn', () => {
    render(<SignIn />);
    screenFn.getByTestId('goBack-btn');
  });

  it('renders 3 textInput components', () => {
    render(<SignIn />);
    const textInputs = screenFn.queryAllByTestId('text-input');
    expect(textInputs).toHaveLength(2);
  });

  it('renders input fields with labels', () => {
    render(<SignIn />);
    const textInputs = screenFn.queryAllByTestId('text-input');
    textInputs.forEach(input => {
      expect(input).toHaveProp('label');
    });
  });

  it('renders input fields in correct order', () => {
    render(<SignIn />);
    const textInputs = screenFn.queryAllByTestId('text-input');
    expect(textInputs[0]).toHaveProp('label', 'Email');
    expect(textInputs[1]).toHaveProp('placeholder', 'Your password');
  });

  it('renders "Forgot Password?" link', () => {
    render(<SignIn />);
    const links = screenFn.queryAllByTestId('link');
    expect(links[0]).toHaveTextContent('Forgot Password?', {exact: false});
  });

  it('navigates to Forgot Password screen when forgot password link is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<SignIn />);
    const links = screenFn.queryAllByTestId('link');
    const forgotPasswordLink = links[0];
    userEvent.press(forgotPasswordLink);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('renders a button component', () => {
    render(<SignIn />);
    expect(screenFn.queryAllByTestId('btn')).toBeDefined();
  });

  it('renders Login button component', () => {
    render(<SignIn />);
    screenFn.getByText('Login');
  });

  it('displays sign up text as link', () => {
    render(<SignIn />);
    const links = screenFn.queryAllByTestId('link');
    expect(links[1]).toHaveTextContent('Sign Up', {exact: false});
  });

  it('navigates to Sign Up screen when signIn link is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<SignIn />);

    const links = screenFn.queryAllByTestId('link');
    const signUpLink = links[1];
    userEvent.press(signUpLink);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('display lineBreak component', () => {
    render(<SignIn />);
    screenFn.getByTestId('separator');
  });

  it('displays Google signin button', () => {
    render(<SignIn />);
    screenFn.getByText('Sign in with Google');
  });

  it('displays Apple signin button', () => {
    render(<SignIn />);
    screenFn.getByText('Sign in with Apple');
  });
});

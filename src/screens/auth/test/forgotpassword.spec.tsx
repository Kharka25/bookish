import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  render,
  screen,
  userEvent,
  waitFor,
} from '@testing-library/react-native';

import {ForgotPassword} from '@screens';
import {fontScale} from '@utils/responsiveDesign';

import {ContactModeData} from '@constants/data';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});
jest.mock('../PasswordReset/resetpassword', () => jest.fn());

describe('Forgot Password', () => {
  it('renders correctly', () => {
    render(<ForgotPassword />);
    screen.getByTestId('forgot-password');
  });

  it('renders goBack button', () => {
    render(<ForgotPassword />);
    screen.getByTestId('goBack-btn');
  });

  it('displays Forgot Password header text', () => {
    render(<ForgotPassword />);
    screen.getByText('Forgot Password');
  });

  it('displays Forgot Password text with correct styles', () => {
    render(<ForgotPassword />);
    const headerText = screen.getByText('Forgot Password');
    expect(headerText).toHaveStyle({fontSize: fontScale(24)});
  });

  it('displays subheader text', () => {
    render(<ForgotPassword />);
    screen.getByText('Select a mode of contact to reset your password', {
      exact: true,
    });
  });

  it('displays subheading text with correct styles', () => {
    render(<ForgotPassword />);
    const subHeadingText = screen.getByText(
      'Select a mode of contact to reset your password',
    );
    expect(subHeadingText).toHaveStyle({fontWeight: '400'});
  });

  it('renders contact mode select cards', () => {
    render(<ForgotPassword />);
    expect(screen.queryAllByTestId('mode-card')).toBeDefined();
  });

  it('renders expected number of contact mode select cards', () => {
    render(<ForgotPassword />);
    expect(screen.queryAllByTestId('mode-card').length).toEqual(
      ContactModeData.length,
    );
  });

  it('renders a button', () => {
    render(<ForgotPassword />);
    screen.getByTestId('btn');
  });

  it('navigates to Reset Password screen with correct data', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<ForgotPassword />);
    const btn = screen.getByTestId('btn');
    userEvent.press(btn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('ResetPassword', {
        mode: 'Email',
        prevScreen: 'ForgotPassword',
      });
    });
  });
});

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  fireEvent,
  render,
  screen as screenFn,
  waitFor,
} from '@testing-library/react-native';

import {Onboarding} from '@screens';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Onboarding Screen', () => {
  it('renders correctly', () => {
    render(<Onboarding />);
    screenFn.getByTestId('onboard-screen');
  });

  it('displays skip text', async () => {
    render(<Onboarding />);
    expect(await screenFn.findAllByText('Skip')).toBeDefined();
  });

  it('navigates to SignUp screen when skip text is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<Onboarding />);
    const skipBtn = screenFn.getByTestId('skip');
    fireEvent.press(skipBtn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('contains a carousel component', async () => {
    render(<Onboarding />);
    expect(screenFn.queryAllByTestId('carousel')).toBeDefined();
  });

  it('renders button component', () => {
    render(<Onboarding />);
    const btnElement = screenFn.queryAllByTestId('btn');
    expect(btnElement).not.toBeUndefined();
  });

  it('renders 2 buttons', async () => {
    render(<Onboarding />);
    const btnElements = await screenFn.findAllByTestId('btn');
    expect(btnElements.length).toBe(2);
  });

  it('renders "Get Startd button"', async () => {
    render(<Onboarding />);
    screenFn.getByText('Get Started');
  });

  it('navigates to SignUp screen when "Get Started" button is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<Onboarding />);
    const getStartedBtn = screenFn.getByText('Get Started');
    fireEvent.press(getStartedBtn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('renders sign in button', async () => {
    render(<Onboarding />);
    expect(await screenFn.findAllByTestId('signin-btn')).toBeDefined();
  });

  it('navigates to SignIn screen when "SignIn" button is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<Onboarding />);
    const signInBtn = screenFn.getByText('Sign In');
    fireEvent.press(signInBtn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});

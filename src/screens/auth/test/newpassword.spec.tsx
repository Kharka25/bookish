import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  // fireEvent,
  render,
  screen as screenFn,
  userEvent,
  waitFor,
} from '@testing-library/react-native';

import {NewPassword} from '@screens';
import {fontScale} from '@utils/responsiveDesign';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('New Password', () => {
  it('renders correctly', () => {
    render(<NewPassword />);
    screenFn.getByTestId('new-password');
  });

  it('renders goBack button', () => {
    render(<NewPassword />);
    screenFn.getByTestId('goBack-btn');
  });

  it('displays New Password header text', () => {
    render(<NewPassword />);
    screenFn.queryAllByText('New Password')[0];
  });

  it('displays header text with correct styles', () => {
    render(<NewPassword />);
    const headerText = screenFn.queryAllByText('New Password');
    expect(headerText[0]).toHaveStyle({fontSize: fontScale(24)});
  });

  it('displays subheader text', () => {
    render(<NewPassword />);
    screenFn.getByText('Create your new password', {exact: false});
  });

  it('displays subheader text with correct styles', () => {
    render(<NewPassword />);
    const subHeadingText = screenFn.getByText('Create your new password', {
      exact: false,
    });
    expect(subHeadingText).toHaveStyle({fontWeight: '400'});
  });

  it('renders 2 textInputs', () => {
    render(<NewPassword />);
    const textInputs = screenFn.queryAllByTestId('text-input');
    expect(textInputs).toHaveLength(2);
  });

  it('renders textInputs with labels', () => {
    render(<NewPassword />);
    const textInputs = screenFn.queryAllByTestId('text-input');
    textInputs.forEach(input => {
      expect(input).toHaveProp('label');
    });
  });

  it('renders textInputs in correct order', () => {
    render(<NewPassword />);
    const textInputs = screenFn.queryAllByTestId('text-input');
    expect(textInputs[0]).toHaveProp('secureTextEntry');
    expect(textInputs[1]).toHaveProp('placeholder', 'Your password');
  });

  it('renders a button', () => {
    render(<NewPassword />);
    screenFn.getByTestId('btn');
  });

  it('renders button with Send label', () => {
    render(<NewPassword />);
    screenFn.getByText('Send');
  });

  it('navigates to next screen when button is pressed', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});

    render(<NewPassword />);
    const sendBtn = screenFn.getByTestId('btn');
    userEvent.press(sendBtn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});

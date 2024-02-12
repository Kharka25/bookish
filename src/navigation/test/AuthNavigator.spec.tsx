import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  render,
  screen as screenFn,
  waitFor,
} from '@testing-library/react-native';

import {
  NewPassword,
  Onboarding,
  ResetPassword,
  SignIn,
  SignUp,
  Verification,
} from '@screens';
import MockedNavigator from '@utils/mockednavigator';

jest.mock('../../screens/auth/onboarding', () => jest.fn());
jest.mock('../../screens/auth/signup', () => jest.fn());
jest.mock('../../screens/auth/signin', () => jest.fn());
jest.mock('../../screens/auth/PasswordReset/verification', () => jest.fn());
jest.mock('../../screens/auth/PasswordReset/forgotpassword', () => jest.fn());
jest.mock('../../screens/auth/PasswordReset/resetpassword', () => jest.fn());
jest.mock('../../screens/auth/PasswordReset/newpassword', () => jest.fn());

describe('Auth Screens Navigation', () => {
  it('renders Onboard screen by default', async () => {
    (Onboarding as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-onboard-screen" />,
    );
    render(<MockedNavigator component={Onboarding} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-onboard-screen');
    });
  });

  it('renders SignUp screen in routes', async () => {
    (SignUp as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-signup-screen" />,
    );
    render(<MockedNavigator component={SignUp} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-signup-screen');
    });
  });

  it('renders Verification screen in routes', async () => {
    (Verification as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-verification-screen" />,
    );
    render(<MockedNavigator component={Verification} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-verification-screen');
    });
  });

  it('renders SignIn screen in routes', async () => {
    (SignIn as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-signin-screen" />,
    );
    render(<MockedNavigator component={SignIn} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-signin-screen');
    });
  });

  it('renders ResetPassword screen in routes', async () => {
    (ResetPassword as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-resetpassword-screen" />,
    );
    render(<MockedNavigator component={ResetPassword} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-resetpassword-screen');
    });
  });

  it('renders NewPassword screen in routes', async () => {
    (NewPassword as unknown as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-resetpassword-screen" />,
    );
    render(<MockedNavigator component={NewPassword} />);

    await waitFor(() => {
      screenFn.getByTestId('mock-resetpassword-screen');
    });
  });
});

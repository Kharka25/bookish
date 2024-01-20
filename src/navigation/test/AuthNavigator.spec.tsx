/* eslint-disable jest/no-focused-tests */
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  act,
  render,
  screen as screenFn,
  waitFor,
} from '@testing-library/react-native';

import {AuthNavigator} from '@navigation';
import {ForgotPassword, Onboarding, SignIn, SignUp} from '@screens';

jest.mock('../../screens/auth/Onboarding/onboarding', () => jest.fn());
jest.mock('../../screens/auth/Signup/signup', () => jest.fn());
jest.mock('../../screens/auth/Signin/signin', () => jest.fn());
jest.mock('../../screens/auth/PasswordReset/forgotpassword', () => jest.fn());

describe('Auth Screens Navigation', () => {
  it('renders Onboarding screen by default', async () => {
    (Onboarding as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-onboard-screen" />,
    );

    render(<AuthNavigator />);

    await waitFor(() => {
      screenFn.getByTestId('mock-onboard-screen');
    });
  });

  fit('renders SignUp screen on "SignUp" route', async () => {
    (Onboarding as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        // @ts-expect-error
        navigation.navigate('SignUp');
      }, [navigation]);

      return null;
    });

    (SignUp as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-signup-screen" />,
    );

    render(<AuthNavigator />);

    await waitFor(() => {
      screenFn.getByTestId('mock-signup-screen');
    });
  });

  it('renders SignIn screen on "SignIn" route', async () => {
    await act(() => {
      (Onboarding as jest.Mock).mockImplementationOnce(() => {
        const navigation = useNavigation();

        useEffect(() => {
          // @ts-expect-error
          navigation.navigate('SignIn');
        }, [navigation]);

        return null;
      });
    });

    (SignIn as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-signin-screen" />,
    );

    const wrapper = render(<AuthNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-signin-screen');
    });
  });

  it('renders ForgotPassword screen on "ForgotPassword" route', async () => {
    (Onboarding as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();

      useEffect(() => {
        // @ts-expect-error
        navigation.navigate('ForgotPassword');
      }, [navigation]);

      return null;
    });

    (ForgotPassword as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-forgotpassword-screen" />,
    );

    const wrapper = render(<AuthNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-forgotpassword-screen');
    });
  });
});

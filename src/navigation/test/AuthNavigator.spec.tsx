import React from 'react';
import {SafeAreaView} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {
  render,
  screen as screenFn,
  waitFor,
} from '@testing-library/react-native';

import {AuthNavigator, RootNavigator} from '@navigation';
import {Onboarding, SignUp} from '@screens';
import MockedNavigator from '@utils/mockednavigator';

jest.mock('../../screens/auth/Onboarding/onboarding', () => jest.fn());
jest.mock('../../screens/auth/Signup/signup', () => jest.fn());
jest.mock('../../screens/auth/Signin/signin', () => jest.fn());
jest.mock('../../screens/auth/PasswordReset/forgotpassword', () => jest.fn());

describe('Auth Screens Navigation', () => {
  it('renders Onboarding screen', async () => {
    (RootNavigator as jest.Mock).mockReturnValueOnce(
      <SafeAreaView testID="mock-onboard-screen" />,
    );

    render(<AuthNavigator />);

    await waitFor(() => {
      screenFn.getByTestId('mock-onboard-screen');
    });
  });

  it('renders Onboarding screen in routes', async () => {
    const {toJSON} = render(
      <MockedNavigator
        component={Onboarding}
        params={{carouselData: 'Fake Data'}}
      />,
    );
    const snapShot = toJSON();
    console.log(snapShot);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders SignUp screen on "SignUp" route', async () => {
    const {toJSON} = render(<MockedNavigator component={SignUp} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';

import GenerateNavigator, {ScreenType} from '@config/generateNavigation';
import {
  ForgotPassword,
  NewPassword,
  Onboarding,
  ResetPassword,
  SignIn,
  SignUp,
  Status,
  Verification,
} from '@screens';
import AppNavigator from './AppNavigator';

const stacks: ScreenType[] = [
  {
    name: 'Onboarding',
    component: Onboarding,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'Verification',
    component: Verification,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    name: 'NewPassword',
    component: NewPassword,
  },
  {
    name: 'Status',
    component: Status,
  },
  {
    name: 'AppNavigator',
    component: AppNavigator,
  },
];

const AuthNavigator = () => {
  return (
    <GenerateNavigator
      navType="stack"
      paths={stacks}
      initialRouteName="Onboarding"
    />
  );
};

export default AuthNavigator;

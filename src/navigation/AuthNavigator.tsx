import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import {AuthStackParamList} from '@models/navigation';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="ResetPassword" component={ResetPassword} />
      <Screen name="NewPassword" component={NewPassword} />
      <Screen name="Status" component={Status} />
      <Screen name="Verification" component={Verification} />
    </Navigator>
  );
};

export default AuthNavigator;

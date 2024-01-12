import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ForgotPassword, Onboarding, SignIn, SignUp} from '@screens';
import {AuthStackParamList} from '@models/navigation';
import {Colors} from '@constants/colors';

const {Navigator, Screen} = createStackNavigator<AuthStackParamList>();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.WHITE,
    primary: Colors.PRIMARY,
  },
};

const AuthNavigator = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

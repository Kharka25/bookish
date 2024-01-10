import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Onboarding, SignIn, SignUp} from '@screens';
import {AuthStackParamList} from '@models/navigation';

const {Navigator, Screen} = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

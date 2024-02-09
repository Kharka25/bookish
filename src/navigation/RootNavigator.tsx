import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {AppNavigator, AuthNavigator} from '@navigation';
import {Colors} from '@constants/colors';
import useAuth from '@store/auth/hooks';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.WHITE,
    primary: Colors.PRIMARY,
  },
};

const RootNavigator = () => {
  const {authState} = useAuth();
  return (
    <NavigationContainer theme={AppTheme}>
      {authState.isAuth ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

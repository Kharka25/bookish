import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {AppNavigator, AuthNavigator} from '@navigation';
import {Colors} from '@constants/colors';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.WHITE,
    primary: Colors.PRIMARY,
  },
};

const RootNavigator = () => {
  const isLoading = false;
  return (
    <NavigationContainer theme={AppTheme}>
      {isLoading ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

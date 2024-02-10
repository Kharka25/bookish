/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {AppNavigator, AuthNavigator} from '@navigation';
import {fetchAuthInfo} from '@services/auth';

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
  const {authState, updateUserProfile} = useAuth();

  async function getAuthInfo() {
    try {
      const data = await fetchAuthInfo();
      console.log(data);
      updateUserProfile(data?.profile);
      // updateIsAuth(true);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getAuthInfo();
  }, []);

  return (
    <NavigationContainer theme={AppTheme}>
      {!authState.isAuth ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

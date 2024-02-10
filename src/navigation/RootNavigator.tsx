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
  const {authState, updateIsAuth, updateUserProfile} = useAuth();
  console.log(authState.access_token);

  async function getAuthInfo() {
    try {
      const data = await fetchAuthInfo();
      console.log(data);
      updateUserProfile(data?.profile);
      if (data?.profile.id) {
        updateIsAuth(true);
      }
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getAuthInfo();
  }, []);

  return (
    <NavigationContainer theme={AppTheme}>
      {authState.access_token?.length! > 0 &&
      authState.access_token?.trim() !== '' ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {AppNavigator, AuthNavigator} from '@navigation';
import {fetchAuthInfo} from '@services/auth';
import useAuth from '@store/auth/hooks';

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
  const {authState, updateIsAuth, updateUserProfile} = useAuth();

  async function getAuthInfo() {
    try {
      const {profile} = await fetchAuthInfo();
      updateUserProfile(profile);
      if (profile.id) {
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

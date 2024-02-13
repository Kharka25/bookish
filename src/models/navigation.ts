import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {NewUserResponseI} from '@customTypes/response.types';

export type ResetMode = 'Email' | 'Phone';

type AuthScreenList =
  | 'ForgotPassword'
  | 'SignUp'
  | 'ResetPassword'
  | 'Verification'
  | 'SignIn';

type AppScreenList = 'Home' | 'Status' | 'Cart' | 'Category' | 'Profile';

interface StatusI {
  btnText: string;
  message: string;
  route: AuthScreenList | AppScreenList;
  title: string;
}

export type AuthStackParamList = {
  Onboarding: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  ResetPassword: {mode: ResetMode; prevScreen: AuthScreenList};
  SignUp: undefined;
  SignIn: undefined;
  Status: {statusProps: StatusI};
  Verification: {
    mode: ResetMode;
    prevScreen: AuthScreenList;
    userInfo?: NewUserResponseI;
  };
};

export type AppTabParamList = {
  Cart: undefined;
  Category: undefined;
  Home: undefined;
  Profile: undefined;
  TabNavigator: undefined;
};

export type AppStackParamList = {
  AppNavigator: undefined;
  Account: undefined;
  Address: undefined;
  Authors: undefined;
  Favorites: undefined;
  Location: undefined;
  Location2: undefined;
  MyAccount: undefined;
  Notification: undefined;
  Offers: undefined;
  OrderHistory: undefined;
  Search: undefined;
  Support: undefined;
  Vendors: undefined;
  TabNavigator: undefined;
} & AuthStackParamList &
  AppTabParamList;

export function useAppNavigation() {
  return useNavigation<NavigationProp<AppStackParamList>>();
}

import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export type ResetMode = 'Email' | 'Phone';

type AuthScreenList =
  | 'ForgotPassword'
  | 'SignUp'
  | 'ResetPassword'
  | 'Verification'
  | 'SignIn';

type AppScreenList = 'Home' | 'Status' | 'Cart' | 'Category' | 'Profile';

export type AuthStackParamList = {
  Onboarding: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  ResetPassword: {mode: ResetMode; prevScreen: AuthScreenList};
  SignUp: undefined;
  SignIn: undefined;
  Status: {statusProps: StatusI};
  Verification: {mode: ResetMode; prevScreen: AuthScreenList};
};

export type AppStackParamList = {
  Address: undefined;
  Authors: undefined;
  Favorites: undefined;
  HelpCenter: undefined;
  Location: undefined;
  Location2: undefined;
  MyAccount: undefined;
  Notification: undefined;
  OrderHistory: undefined;
  Search: undefined;
  Vendors: undefined;
  TabNavigator: undefined;
} & Pick<AuthStackParamList, 'Status'>;

export type AppTabParamList = {
  Cart: undefined;
  Category: undefined;
  Home: undefined;
  Profile: undefined;
};

interface StatusI {
  btnText: string;
  message: string;
  route: AuthScreenList | AppScreenList;
  title: string;
}

export function useAppNavigation() {
  const authNav =
    useNavigation<NavigationProp<AuthStackParamList & AppTabParamList>>();
  return authNav;
}

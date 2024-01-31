import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export type ResetMode = 'Email' | 'Phone';

type AuthScreenList =
  | 'ForgotPassword'
  | 'SignUp'
  | 'ResetPassword'
  | 'Verification'
  | 'SignIn';

type AppScreenList = 'Home';

export type AuthStackParamList = {
  Onboarding: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  ResetPassword: {mode: ResetMode; prevScreen: AuthScreenList};
  SignUp: undefined;
  SignIn: undefined;
  Verification: {mode: ResetMode; prevScreen: AuthScreenList};
};

export type AppStackParamList = {
  Home: undefined;
  Status: {statusProps: StatusI};
};

interface StatusI {
  btnText: string;
  message: string;
  route: AuthScreenList | AppScreenList;
  title: string;
}

export function useAppNavigation() {
  const authNav =
    useNavigation<NavigationProp<AuthStackParamList & AppStackParamList>>();
  return authNav;
}

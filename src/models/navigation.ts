import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends
//   }
// }

export type ResetMode = 'Email' | 'Phone';

type AuthScreenList =
  | 'ForgotPassword'
  | 'SignUp'
  | 'ResetPassword'
  | 'Verification'
  | 'SignIn';

export type AuthStackParamList = {
  Onboarding: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  ResetPassword: {mode: ResetMode; prevScreen: AuthScreenList};
  SignUp: undefined;
  SignIn: undefined;
  Status: undefined;
  Verification: {mode: ResetMode; prevScreen: AuthScreenList};
};

export function useAuthNavigation() {
  const authNav = useNavigation<NavigationProp<AuthStackParamList>>();
  return authNav;
}

import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends
//   }
// }

export type ResetMode = 'Email' | 'Phone';

export type AuthStackParamList = {
  Onboarding: undefined;
  ForgotPassword: undefined;
  ResetPassword: {mode: ResetMode};
  SignUp: undefined;
  SignIn: undefined;
};

export function useAuthNavigation() {
  const authNav = useNavigation<NavigationProp<AuthStackParamList>>();
  return authNav;
}

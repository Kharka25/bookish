import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends
//   }
// }

export type AuthStackParamList = {
  Onboarding: undefined;
  SignUp: {userInfo?: {username: string; email: string}};
  SignIn: undefined;
};

export function useAuthNavigation() {
  const authNav = useNavigation<NavigationProp<AuthStackParamList>>();
  return authNav;
}

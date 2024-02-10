import {useAppDispatch, useAppSelector} from '@store/hooks';
import {getAuthState} from './auth';
import {
  logout,
  setCredentials,
  setIsLoggedIn,
  setAuthState,
  setUserProfile,
} from './auth';
import {UserProfileI} from '@models/auth';
import {clearAsyncStorage} from '@utils/cache';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const authState = useAppSelector(getAuthState);

  function logOutUser() {
    dispatch(logout());
    clearAsyncStorage();
  }

  function updateCredentials(value: string) {
    dispatch(setCredentials(value));
  }

  function updateIsAuth(value: boolean) {
    dispatch(setAuthState(value));
  }

  function updateIsLoggedIn(value: boolean) {
    dispatch(setIsLoggedIn(value));
  }

  function updateUserProfile(value: UserProfileI) {
    dispatch(setUserProfile(value));
  }

  return {
    authState,
    logOutUser,
    updateCredentials,
    updateIsAuth,
    updateIsLoggedIn,
    updateUserProfile,
  };
};

export default useAuth;

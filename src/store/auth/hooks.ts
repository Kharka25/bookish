import {useAppDispatch, useAppSelector} from '@store/hooks';
import {getAuthState} from './auth';
import {logout, setIsLoggedIn, updateProfile} from './auth';
import {UserProfileI} from '@models/auth';
import {clearAsyncStorage} from '@utils/cache';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const authState = useAppSelector(getAuthState);

  function logOutUser() {
    dispatch(logout());
    clearAsyncStorage();
  }

  function updateIsLoggedIn(value: boolean) {
    dispatch(setIsLoggedIn(value));
  }

  function updateUserProfile(value: UserProfileI) {
    dispatch(updateProfile(value));
  }

  return {
    authState,
    logOutUser,
    updateIsLoggedIn,
    updateUserProfile,
  };
};

export default useAuth;

import {Notification} from '@models/notification';
import {useAppDispatch} from '@store/hooks';
import {setNotification} from './notification';

function useNotification() {
  const dispatch = useAppDispatch();

  function updateNotification(value: Notification) {
    dispatch(setNotification(value));
  }

  return {updateNotification};
}

export default useNotification;

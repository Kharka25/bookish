import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

export const unsubscribe = messaging().onMessage(async remoteMessage => {
  const {notification} = remoteMessage;
  Alert.alert(notification?.title!, notification?.body);
});

export async function notificationListener() {
  messaging().onNotificationOpenedApp(remoteMessage => {
    const {notification} = remoteMessage;
    Alert.alert(notification?.title!, notification?.body);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        const {notification} = remoteMessage;
        Alert.alert(notification?.title!, notification?.body);
      }
    });
}

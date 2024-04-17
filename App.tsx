import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import App from './src';
import {checkPreviousSession} from './src/services/appcenter';

let didCrash;
(async function checkCrash() {
  didCrash = await checkPreviousSession();

  if (didCrash) {
    Alert.alert("Sorry about that crash, we're working on a solution");
  }
  console.log(didCrash);
})();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handle in the background', remoteMessage);
});

export default App;

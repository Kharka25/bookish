import {Alert} from 'react-native';

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

export default App;

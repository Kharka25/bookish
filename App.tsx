import {Alert} from 'react-native';

import {checkPreviousSession} from '@services/appcenter';

let didCrash;
(async function checkCrash() {
  didCrash = await checkPreviousSession();

  if (didCrash) {
    Alert.alert("Sorry about that crash, we're working on a solution");
  }
})();

export {default as App} from './src/index';

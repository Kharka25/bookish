import React from 'react';
import {Alert} from 'react-native';
import {hasCrashedInLastSession} from 'appcenter-crashes';

import {RootNavigator} from '@navigation';

const App: React.FC = () => {
  (async function checkPreviousSession() {
    const didCrash = await hasCrashedInLastSession();
    console.log(didCrash);
    if (didCrash) {
      Alert.alert("Sorry about that crash, we're working on a solution");
    }
  })();

  return <RootNavigator />;
};
export default App;

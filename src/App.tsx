import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {hasCrashedInLastSession} from 'appcenter-crashes';

import {AuthNavigator} from '@navigation';

const App: React.FC = () => {
  async function checkPreviousSession() {
    const didCrash = await hasCrashedInLastSession();

    if (didCrash) {
      console.log(didCrash);
      Alert.alert("Sorry about that crash, we're working on a solution");
    }
  }

  useEffect(() => {
    checkPreviousSession();
  }, []);
  return <AuthNavigator />;
};
export default App;

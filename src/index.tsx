/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';

import {AppContainer} from '@components';
import {RootNavigator} from '@navigation';
import {registerDeviceNotification} from '@services/notification';

import {setupStore} from './store/store';
import {notificationListener} from '@utils/notificationUtils';

const store = setupStore();
const persistor = persistStore(store);

const App: React.FC = () => {
  (async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) await registerDeviceNotification();
  })();

  useEffect(() => {
    notificationListener();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AppContainer>
            <RootNavigator />
          </AppContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

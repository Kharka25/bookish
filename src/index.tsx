/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import {QueryClient,  QueryClientProvider } from '@tanstack/react-query';

import {AppContainer} from '@components';
import {RootNavigator} from '@navigation';
import {registerDeviceNotification} from '@services/notification';

import {setupStore} from './store/store';
import {notificationListener} from '@utils/notificationUtils';

const store = setupStore();
const persistor = persistStore(store);
const queryClient = new QueryClient();

const App: React.FC = () => {
  (async function requestUserPermission() {
    let authStatus;

    const isIOS = Platform.OS === 'ios';

    if (isIOS) {
      return (authStatus = await messaging().requestPermission());
    }

    if (!isIOS) {
      return (authStatus = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      ));
    }
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL ||
      authStatus === PermissionsAndroid.RESULTS.GRANTED;

    if (enabled) await registerDeviceNotification();
  })();

  useEffect(() => {
    notificationListener();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate persistor={persistor} loading={null}>
            <AppContainer>
              <RootNavigator />
            </AppContainer>
          </PersistGate>
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

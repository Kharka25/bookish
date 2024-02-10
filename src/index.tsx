import React from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import {AppContainer} from '@components';
import {RootNavigator} from '@navigation';
import {setupStore} from './store/store';

const store = setupStore();
const persistor = persistStore(store);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContainer>
          <RootNavigator />
        </AppContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

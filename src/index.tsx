import React from 'react';
import {Provider} from 'react-redux';

import {AppContainer} from '@components';
import {RootNavigator} from '@navigation';
import {setupStore} from './store/store';

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <RootNavigator />
      </AppContainer>
    </Provider>
  );
};

export default App;

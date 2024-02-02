import React from 'react';
import {Provider} from 'react-redux';

import {RootNavigator} from '@navigation';
import {setupStore} from './store/store';

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

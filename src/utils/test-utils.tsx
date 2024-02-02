import React, {PropsWithChildren, ReactElement} from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {setupStore} from '../store/store';
import type {AppStore, RootState} from 'src/store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

function customRender(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}

export * from '@testing-library/react-native';
export {customRender as renderWithProviders};

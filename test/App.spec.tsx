import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('renders correctly', async () => {
    const wrapper = render(<App />);
    wrapper.getByTestId('App-screen');
  });
});

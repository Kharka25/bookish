import React from 'react';
import {View} from 'react-native';

import {renderWithProviders, screen} from '@utils/test-utils';

describe('Store', () => {
  it('is a valid store', () => {
    renderWithProviders(<View testID="mock-component" />);
    screen.getByTestId('mock-component');
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {LineBreak} from '@components';

describe('LineBreak', () => {
  it('renders correctly', () => {
    render(<LineBreak />);
    screen.getByTestId('separator');
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {ContactModeSelector} from '@components';
import {ContactModeData} from '@constants/data';

describe('ContactModeSelector component', () => {
  it('renders correctly', () => {
    render(<ContactModeSelector />);
    screen.getByTestId('contact-mode-selector');
  });

  it('renders the expected number of cards', () => {
    render(<ContactModeSelector data={ContactModeData} />);
    expect(screen.queryAllByTestId('mode-card').length).toBe(
      ContactModeData.length,
    );
  });
});

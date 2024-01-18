import React from 'react';
import {render, screen} from '@testing-library/react-native';
// import {useNavigation} from '@react-navigation/native';

import {BackIcon} from '@components';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Back Icon', () => {
  it('renders correctly', () => {
    render(<BackIcon />);
    screen.getByTestId('goBack-btn');
  });
});

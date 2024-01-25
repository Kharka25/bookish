import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Status} from '@screens';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Status Screen', () => {
  it('render correctly', () => {
    render(<Status btnText="mock-text" />);
    screen.getByTestId('status-screen');
  });

  it('renders a button', () => {
    render(<Status btnText="mock-text" />);
    screen.getByTestId('btn');
  });

  it('displays label on button when btnText props is passed', () => {
    render(<Status btnText="mock-label" />);
    expect(screen.getByTestId('status-screen')).toHaveProp('btnText');
  });
});

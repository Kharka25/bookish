import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Status} from '@screens';
import {useAppNavigation} from '@models/navigation';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Status Screen', () => {
  it('render correctly', () => {
    const {navigate} = useAppNavigation();
    render(<Status btnText="mock-text" navigation={navigate} />);
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

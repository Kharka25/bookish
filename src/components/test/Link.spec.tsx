import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';

import {Link} from '@components';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Link Component', () => {
  it('renders correctly', () => {
    render(<Link title="" />);
    screen.getByTestId('link');
  });

  it('displays link with a route title', () => {
    render(<Link title="" />);
    const linkRoute = screen.getByRole('link');
    expect(linkRoute).not.toBeUndefined();
  });

  it('displays route text', () => {
    render(<Link title="mock-link-title" />);
    screen.getByText('mock-link-title');
  });

  it('invokes passed onPress function when pressed', async () => {
    const mockOnpress = jest.fn();

    render(<Link title="" onPress={mockOnpress} />);
    const linkBtn = screen.getByTestId('link');
    fireEvent.press(linkBtn);

    await waitFor(() => {
      expect(mockOnpress).toHaveBeenCalled();
    });
  });

  it('should not invoke passed onPress function when active status is false', async () => {
    const mockOnpress = jest.fn();

    render(<Link title="" onPress={mockOnpress} active={false} />);
    const linkBtn = screen.getByTestId('link');
    fireEvent.press(linkBtn);

    await waitFor(() => {
      expect(mockOnpress).not.toHaveBeenCalled();
    });
  });

  it('display with low opacity when active status is false', () => {
    render(<Link title="" active={false} />);
    expect(screen.getByTestId('link')).toHaveStyle({opacity: 0.4});
  });
});

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from '@components';

describe('Button', () => {
  it('renders correctly', () => {
    const btnElement = render(<Button label="" />);
    btnElement.getByTestId('btn');
  });

  it('should display label', () => {
    const wrapper = render(<Button label="label" onPress={jest.fn()} />);
    wrapper.getByText('label');
  });

  it('should call given onPress function when pressed', () => {
    const mockOnpress = jest.fn();
    const wrapper = render(<Button label="" onPress={mockOnpress} />);
    const button = wrapper.getByTestId('btn');

    fireEvent.press(button);
    expect(mockOnpress).toHaveBeenCalled();
  });

  it('accepts custom props', () => {
    const wrapper = render(
      <Button label="label" onPress={jest.fn()} testID="mock-test-id" />,
    );
    wrapper.getByTestId('mock-test-id');
  });

  it('should render loader component when loading is true', () => {
    const wrapper = render(
      <Button label="label" onPress={jest.fn()} testID="loading" />,
    );
    wrapper.getByTestId('loading');
  });
});

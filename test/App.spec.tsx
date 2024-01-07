import React from 'react';
import {render, screen as screenFn} from '@testing-library/react-native';

import App from '../App';
import {Carousel} from '@components';
import {View} from 'react-native';

jest.mock('../src/components/Carousel/carousel', () =>
  jest.fn().mockReturnValue(null),
);

describe('App', () => {
  it('renders correctly', async () => {
    const screen = render(<App />);
    expect(screen.getByTestId('App-screen')).toBeOnTheScreen();
  });

  it('should have heading text', async () => {
    const wrapper = render(<App />);
    wrapper.getByTestId('App-screen');
    expect(wrapper.getByTestId('App-screen')).toHaveTextContent('Skip', {
      exact: false,
    });
  });

  it('should contain a carousel component', async () => {
    (Carousel as unknown as jest.Mock).mockReturnValue(
      <View testID="mock-carousel" />,
    );

    const wrapper = render(<App />);
    wrapper.getByTestId('mock-carousel');
  });

  it('should render carousel', async () => {
    render(<App />);
    const element = screenFn.getByTestId('mock-carousel');
    expect(element).toBeOnTheScreen();
  });

  it('should render button component', () => {
    render(<App />);
    const btnElement = screenFn.getAllByTestId('btn');
    expect(btnElement).not.toBeUndefined();
  });

  it('renders 2 buttons', async () => {
    render(<App />);
    const btnElements = await screenFn.findAllByTestId('btn');
    expect(btnElements.length).toBe(2);
  });

  it('renders "Get Startd button"', async () => {
    const wrapper = render(<App />);
    wrapper.getByText('Get Started');
  });
});

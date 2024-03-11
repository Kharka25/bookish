import React from 'react';
import {render, screen as screenFn} from '@testing-library/react-native';

import {Paginator} from '@components';
import {CarouselData} from '@constants/data';

describe('Paginator', () => {
  it('renders correctly', () => {
    render(<Paginator />);
    const paginator = screenFn.getByTestId('paginator');
    expect(paginator).toBeOnTheScreen();
  });

  it('renders dot paginator', () => {
    render(<Paginator data={[]} />);
    expect(screenFn.queryAllByTestId('dot-indicator')).toBeDefined();
  });

  it('display 3 dots when data array of length 3 is passed in', () => {
    render(<Paginator data={CarouselData} />);
    expect(screenFn.queryAllByTestId('dot-indicator')).toHaveLength(
      CarouselData.length,
    );
  });

  it('displays correct number of dot indicators', () => {
    render(<Paginator data={[]} />);
    expect(screenFn.queryAllByTestId('dot-indicator').length).not.toEqual(
      CarouselData.length,
    );
  });

  it('renders dot only when array of data is passed', () => {
    render(<Paginator data={[]} />);
    const dots = screenFn.queryByTestId('dot-indicator');
    expect(dots).toBeNull();
  });

  it('display dot indicator correctly', () => {
    render(<Paginator data={CarouselData} />);
    const dots = screenFn.queryAllByTestId('dot-indicator');
    expect(dots[0]).toHaveProp('style');
  });
});

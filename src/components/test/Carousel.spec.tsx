import React from 'react';
import {render, screen as screenFn} from '@testing-library/react-native';

import {Carousel} from '@components';
import {CarouselData} from '@constants/data';
// import {Colors} from '@constants/colors';

describe('Carousel', () => {
  it('renders correctly', () => {
    const wrapper = render(<Carousel data={CarouselData} />);
    wrapper.getByTestId('carousel');
  });

  it('renders single list item', async () => {
    render(<Carousel data={CarouselData} />);
    const listItems = await screenFn.findAllByTestId('listItem');
    expect(listItems.length).toBe(1);
  });

  it('renders flat list with data prop', async () => {
    render(<Carousel data={CarouselData} />);
    const listItems = await screenFn.findAllByTestId('listItem');
    expect(listItems[0].props.data).toBeDefined();
  });

  it('renders flatlist with correct data', async () => {
    render(<Carousel data={CarouselData} />);
    const listElement = await screenFn.findAllByTestId('listItem');
    expect(listElement[0].props.data).toStrictEqual(CarouselData);
  });

  it('renders carousel data in correct order', async () => {
    render(<Carousel data={CarouselData} />);
    const listItems = await screenFn.findAllByTestId('listItem');
    expect(listItems[0].props.data[0]).toStrictEqual(CarouselData[0]);
  });

  it('renders scroll indicators', () => {
    render(<Carousel data={CarouselData} />);
    screenFn.queryAllByTestId('paginator');
  });

  it('renders correct number of scroll indicators', async () => {
    render(<Carousel data={CarouselData} />);
    expect(screenFn.queryAllByTestId('dot-indicator').length).toBe(
      CarouselData.length,
    );
  });

  it('renders scroll indicators with correct styles', async () => {
    render(<Carousel data={CarouselData} />);
    const dots = screenFn.queryAllByTestId('dot-indicator');
    expect(dots[0]).toHaveProp('style');
  });
});

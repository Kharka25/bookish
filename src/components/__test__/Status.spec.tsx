import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Status} from '@components';
import {fontScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

describe('Status Component', () => {
  it('renders correctly', () => {
    render(<Status />);
    screen.getByTestId('status');
  });

  it('displays a status image on the screen', () => {
    render(<Status />);
    const statusImg = screen.getByTestId('img');
    expect(statusImg).toBeOnTheScreen();
  });

  it('displays a heading text when title props is passed', () => {
    render(<Status title="mock-heading-text" />);
    screen.getByText('mock-heading-text');
  });

  it('displays heading text with correct styles when title props is passed', () => {
    render(<Status title="mock-heading-text" />);
    const statusTitle = screen.getByText('mock-heading-text');
    expect(statusTitle).toHaveStyle({
      fontSize: fontScale(24),
      fontWeight: '700',
    });
  });

  it('displays a message text when message props is passed', () => {
    render(<Status message="mock-message-text" title="mock-heading-text" />);
    screen.getByText('mock-message-text');
  });

  it('displays message text with correct styles when title props is passed', () => {
    render(<Status message="mock-message-text" title="mock-heading-text" />);
    const statusMessage = screen.getByText('mock-message-text');
    expect(statusMessage).toHaveStyle({
      color: Colors.GRAY_50,
      fontSize: fontScale(16),
      fontWeight: '400',
    });
  });

  // it('renders a button component', () => {
  //   render(<Status />);
  //   const button = screen.getByTestId('btn');
  //   expect(button).toBeOnTheScreen();
  // });

  // it('renders button with "btnLabel" prop', () => {
  //   render(<Status btnLabel="btnLabel" />);
  //   screen.getByText('btnLabel');
  // });
});

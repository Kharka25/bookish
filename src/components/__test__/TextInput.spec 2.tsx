import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {TextInput} from '@components';
import {Colors} from '@constants/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';

describe('TextInput Component', () => {
  it('renders correctly', () => {
    render(<TextInput />);
    screen.getByTestId('text-input');
  });

  it('renders with correct style', () => {
    render(<TextInput />);
    expect(screen.getByTestId('text-input')).toHaveStyle({
      backgroundColor: Colors.BACKGROUND_GRAY,
      borderRadius: horizontalScale(12),
      height: verticalScale(50),
    });
  });

  it('should render a label when passed as props', () => {
    render(<TextInput label="label" />);
    screen.getByText('label');
  });

  it('displays label text with correct style', () => {
    render(<TextInput label="mock-label" />);
    const inputLabel = screen.getByText('mock-label');
    expect(inputLabel).toHaveStyle({
      fontSize: fontScale(14),
      fontWeight: '500',
    });
  });

  it('accepts custom props', () => {
    render(<TextInput testID="mock-test-id" />);
    screen.getByTestId('mock-test-id');
  });
});

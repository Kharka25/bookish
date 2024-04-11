import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {OtpField} from '@components';
import {Colors} from '@constants/colors';
import {horizontalScale, verticalScale} from '@utils/responsiveDesign';

describe('OTP Field', () => {
  it('renders correctly', () => {
    render(<OtpField />);
    screen.getByTestId('otp-field');
  });

  it('renders with correct style', () => {
    render(<OtpField />);
    expect(screen.getByTestId('otp-field')).toHaveStyle({
      backgroundColor: Colors.BACKGROUND_GRAY,
      height: verticalScale(52),
      width: horizontalScale(52),
    });
  });
});

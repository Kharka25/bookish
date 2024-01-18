import {StyleSheet} from 'react-native';

import {Colors} from '@constants/colors';
import {fontScale, verticalScale} from '@utils/responsiveDesign';

const authStyles = StyleSheet.create({
  heading: {
    color: Colors.BLACK,
    fontSize: fontScale(24),
    fontWeight: '700',
    letterSpacing: -0.72,
    lineHeight: fontScale(32),
  },
  linkContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    color: Colors.GRAY_50,
    fontSize: fontScale(16),
    fontWeight: '500',
    lineHeight: fontScale(24),
    marginTop: verticalScale(10),
  },
  subHeading: {
    color: Colors.GRAY_50,
    fontSize: fontScale(16),
    fontWeight: '400',
    lineHeight: fontScale(24),
    marginTop: verticalScale(6),
  },
});

export default authStyles;

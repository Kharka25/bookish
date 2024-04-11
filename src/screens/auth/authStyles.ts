import {StyleSheet} from 'react-native';

import {fontScale, verticalScale} from '@utils/responsiveDesign';

const authStyles = StyleSheet.create({
  heading: {
    letterSpacing: -0.72,
    lineHeight: fontScale(32),
  },
  linkContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(20),
  },
  subHeading: {
    lineHeight: fontScale(24),
    marginTop: verticalScale(3),
  },
});

export default authStyles;

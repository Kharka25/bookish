import {StyleSheet} from 'react-native';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: horizontalScale(12),
    paddingVertical: verticalScale(22),
  },
  btnLabel: {
    color: Colors.WHITE,
    fontSize: fontScale(16),
    fontWeight: '700',
    letterSpacing: fontScale(0.3),
    textAlign: 'center',
  },
  btnLabelLight: {
    color: Colors.PRIMARY,
  },
  btnLight: {
    backgroundColor: Colors.WHITE_10,
  },
});

export default styles;

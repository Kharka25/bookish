import {StyleSheet} from 'react-native';

import {horizontalScale, verticalScale} from '@utils/responsiveDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: verticalScale(-30),
    flexDirection: 'row',
    gap: horizontalScale(5),
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  dot: {
    borderRadius: horizontalScale(30),
    backgroundColor: Colors.PRIMARY,
    height: verticalScale(10),
    width: horizontalScale(11),
  },
  dotInactive: {
    backgroundColor: Colors.GRAY_20,
    height: verticalScale(8),
    width: horizontalScale(9),
  },
});

export default styles;

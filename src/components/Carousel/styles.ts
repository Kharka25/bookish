import {StyleSheet} from 'react-native';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const styles = StyleSheet.create({
  carouselSubTitle: {
    alignSelf: 'center',
    fontFamily: 'Poppins',
    fontSize: fontScale(15),
    fontWeight: '400',
    marginTop: verticalScale(10),
    maxWidth: verticalScale(280),
    textAlign: 'center',
  },
  carouseTitle: {
    fontFamily: 'Poppins',
    fontSize: fontScale(30),
    fontWeight: '600',
    marginTop: verticalScale(-20),
    textAlign: 'center',
  },
  container: {},
  dot: {
    height: verticalScale(10),
    borderRadius: horizontalScale(30),
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: horizontalScale(2),
    width: horizontalScale(1),
  },
});

export default styles;

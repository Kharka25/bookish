import {Dimensions, StyleSheet} from 'react-native';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  // container: {
  //   marginBottom: 20,
  // },
  carouselContainer: {
    marginBottom: verticalScale(10),
    position: 'relative',
    width,
  },
  carouseImg: {
    alignSelf: 'center',
    height: verticalScale(300),
    marginBottom: verticalScale(20),
    marginTop: verticalScale(20),
    resizeMode: 'contain',
    width: horizontalScale(320),
  },
  carouselScrollContainer: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: verticalScale(30),
  },
  carouselScrollItemActive: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: horizontalScale(100),
    height: verticalScale(15),
    marginHorizontal: horizontalScale(2),
    width: horizontalScale(12),
  },
  carouselScrollItemInactive: {
    backgroundColor: Colors.GRAY_20,
  },
  carouselSubTitle: {
    alignSelf: 'center',
    color: Colors.GRAY_50,
    fontFamily: 'Poppins',
    fontSize: fontScale(16),
    fontWeight: '400',
    letterSpacing: 0.2,
    marginTop: verticalScale(10),
    maxWidth: verticalScale(300),
    textAlign: 'center',
  },
  carouseTitle: {
    alignSelf: 'center',
    color: Colors.GRAY_100,
    fontFamily: 'Poppins',
    fontSize: fontScale(30),
    fontWeight: '700',
    maxWidth: horizontalScale(280),
    textAlign: 'center',
  },
});

export default styles;

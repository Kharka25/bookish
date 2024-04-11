import {StyleSheet} from 'react-native';

import {horizontalScale, verticalScale} from '@utils/responsiveDesign';

const styles = StyleSheet.create({
  container: {},
  flatlistContainer: {
    gap: horizontalScale(10),
    marginBottom: verticalScale(5),
    marginTop: verticalScale(10),
  },
});

export default styles;

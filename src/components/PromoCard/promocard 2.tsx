import React, {ReactNode} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

import {Button, Text} from '@components';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type PromoCardProps = {
  children?: ReactNode;
  id?: number;
  ctaText: string;
  img?: ImageSourcePropType;
  mainText?: string;
  subText?: string;
} & ViewProps;

const PromoCard: React.FC<PromoCardProps> = props => {
  const {ctaText, img, mainText, style, subText} = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.container1}>
        <View>
          <Text
            content={mainText}
            fontSize={fontScale(16)}
            fontWeight="600"
            style={{marginBottom: verticalScale(2)}}
          />
          <Text content={subText} fontWeight="400" />
        </View>
        <Button
          label={ctaText}
          labelStyle={styles.btnLabelStyle}
          style={styles.btnStyle}
        />
      </View>
      <View style={styles.container2}>
        {img && <Image resizeMode="cover" style={styles.img} source={img} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_10,
    borderRadius: horizontalScale(12),
    flexDirection: 'row',
    height: verticalScale(160),
    width: '100%',
  },
  btnLabelStyle: {
    fontSize: fontScale(15),
    fontWeight: '500',
  },
  btnStyle: {
    borderRadius: horizontalScale(50),
    height: verticalScale(40),
    marginTop: verticalScale(14),
    paddingVertical: verticalScale(8),
    width: '55%',
  },
  container1: {
    paddingLeft: horizontalScale(20),
    paddingVertical: verticalScale(24),
    width: '60%',
  },
  container2: {
    height: '100%',
    width: '40%',
  },
  img: {
    borderRadius: horizontalScale(5),
    height: '100%',
    width: '100%',
  },
  // innerContainer: {
  //   flexDirection: 'row',
  // },
});

export default React.memo(PromoCard);

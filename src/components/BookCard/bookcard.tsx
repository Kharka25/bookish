import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

import {Text} from '@components';
import {Colors} from '@constants/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';

export interface BookItemI extends ViewProps {
  id?: string;
  img: ImageSourcePropType;
  price: string;
  title: string;
}

const BookCard: React.FC<BookItemI> = props => {
  const {id, img, price, style, title} = props;
  return (
    <Pressable key={id} style={[styles.container, style]}>
      <View style={styles.coverContainer}>
        <Image source={img} style={styles.bookCover} />
      </View>
      <View style={styles.infoContainer}>
        <Text content={title} style={styles.titleText} />
        <Text content={price} style={styles.priceText} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(12),
    height: verticalScale(210),
    width: '46%',
  },
  bookCover: {
    borderRadius: horizontalScale(12),
    height: verticalScale(158),
    resizeMode: 'cover',
    width: '100%',
  },
  coverContainer: {
    marginBottom: verticalScale(8),
    paddingHorizontal: horizontalScale(2),
    width: '100%',
  },
  infoContainer: {
    paddingLeft: horizontalScale(10),
  },
  priceText: {
    color: Colors.PRIMARY,
    fontWeight: '500',
  },
  titleText: {
    fontSize: fontScale(16),
    fontWeight: '500',
  },
});

export default BookCard;

import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
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
  imgStyle?: StyleProp<ImageStyle>;
  price: string;
  title: string;
}

const BookCard: React.FC<BookItemI> = props => {
  const {id, img, imgStyle, price, style, title} = props;
  return (
    <Pressable key={id} style={[styles.container, style]}>
      <View style={styles.coverContainer}>
        <Image source={img} style={[styles.bookCover, imgStyle]} />
      </View>
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          content={title}
          fontSize={fontScale(16)}
          fontWeight="500"
          style={styles.titleText}
        />
        <Text color={Colors.PRIMARY} content={price} fontWeight="500" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_GRAY,
    borderRadius: horizontalScale(12),
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
  titleText: {
    marginBottom: verticalScale(3),
  },
});

export default BookCard;

import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

type BaseT = 'HEIGHT' | 'WIDTH';

enum BaseEnum {
  HEIGHT = 'HEIGHT',
  WIDTH = 'WIDTH',
}

const screenHeight = 896;
const screenWidth = 424;

const baseHeightScale = SCREEN_HEIGHT / screenHeight;
const baseWidthScale = SCREEN_WIDTH / screenWidth;

function scaleValue(size: number, based: BaseT) {
  const newSize =
    based === 'HEIGHT' ? size * baseHeightScale : size * baseWidthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

function heightPixel(size: number) {
  return scaleValue(size, BaseEnum.HEIGHT);
}

function widthPixel(size: number) {
  return scaleValue(size, BaseEnum.WIDTH);
}

function fontScale(size: number) {
  return heightPixel(size);
}

function verticalScale(size: number) {
  return heightPixel(size);
}

function horizontalScale(size: number) {
  return widthPixel(size);
}

const globalStyles = StyleSheet.create({
  mbMD: {
    // marginBottom: verticalScale(24),
    marginBottom: '6%',
  },
  mbLg: {
    // marginBottom: verticalScale(32),
    marginBottom: '15%',
  },
  mtSm: {
    marginTop: '5%',
  },
  mtLg: {
    marginTop: '40%',
  },
  screenContainer: {
    flex: 1,
    paddingVertical:
      Platform.OS === 'ios' ? verticalScale(10) : verticalScale(20),
    paddingHorizontal: horizontalScale(15),
  },
});

export {
  fontScale,
  globalStyles,
  heightPixel,
  horizontalScale,
  verticalScale,
  widthPixel,
};

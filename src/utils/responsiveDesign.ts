import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

enum BaseType {
  HEIGHT = 'height',
  WIDTH = 'width',
}

const screenHeight = 896;
const screenWidth = 424;

const baseHeightScale = SCREEN_HEIGHT / screenHeight;
const baseWidthScale = SCREEN_WIDTH / screenWidth;

function scaleValue(size: number, based: BaseType) {
  const newSize =
    based === 'height' ? size * baseHeightScale : size * baseWidthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

function heightPixel(size: number) {
  return scaleValue(size, BaseType.HEIGHT);
}

function widthPixel(size: number) {
  return scaleValue(size, BaseType.WIDTH);
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

export default {
  fontScale,
  heightPixel,
  horizontalScale,
  verticalScale,
  widthPixel,
};

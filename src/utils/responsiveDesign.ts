import {Dimensions, PixelRatio} from 'react-native';

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

export {fontScale, heightPixel, horizontalScale, verticalScale, widthPixel};

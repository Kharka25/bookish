import React from 'react';
import {Text as Txt, TextProps, TextStyle, ColorValue} from 'react-native';

import {fontScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type TxtProps = {
  color?: string | ColorValue;
  content: string | number | undefined;
  fontFamily?: TextStyle['fontFamily'];
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
} & TextProps;

const Text: React.FC<TxtProps> = props => {
  const {
    color = Colors.BLACK,
    content,
    fontFamily = 'Poppins',
    fontSize = fontScale(14),
    fontWeight = '400',
    numberOfLines,
    style,
  } = props;
  return (
    <Txt
      numberOfLines={numberOfLines}
      style={[style, {color: color, fontFamily, fontSize, fontWeight}]}>
      {content}
    </Txt>
  );
};

export default React.memo(Text);

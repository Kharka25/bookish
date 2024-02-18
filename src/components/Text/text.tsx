import React from 'react';
import {Text as Txt, TextProps, TextStyle} from 'react-native';

import {fontScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

type TxtProps = {
  color?: string;
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
  } = props;
  return <Txt style={{color, fontFamily, fontSize, fontWeight}}>{content}</Txt>;
};

export default React.memo(Text);

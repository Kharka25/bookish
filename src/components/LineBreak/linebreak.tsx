import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

import {Text} from '@components';

import {Colors} from '@constants/colors';
import {fontScale, horizontalScale} from '@utils/responsiveDesign';

type Props = {
  label?: string;
} & ViewProps;

const LineBreak: React.FC<Props> = props => {
  const {label, style} = props;
  return (
    <View testID="separator" style={[styles.container, style]}>
      <View style={[styles.innerLine, !label && styles.innerLineNoLabel]} />
      {label && <Text content={label} style={styles.innerText} />}
      <View style={[styles.innerLine, !label && styles.innerLineNoLabel]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  innerLine: {
    backgroundColor: 'red',
    borderColor: Colors.GRAY_20,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    width: '45%',
  },
  innerLineNoLabel: {
    width: '50%',
  },
  innerText: {
    color: Colors.GRAY_50,
    letterSpacing: 0.5,
    lineHeight: fontScale(19),
    marginHorizontal: horizontalScale(5),
  },
});

export default LineBreak;

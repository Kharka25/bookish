import React from 'react';
import {Text, View, StyleSheet, ViewProps} from 'react-native';

import {Colors} from '@constants/colors';
import {fontScale, horizontalScale} from '@utils/responsiveDesign';

interface Props extends ViewProps {
  label?: string;
}

const LineBreak: React.FC<Props> = props => {
  const {label, style} = props;
  return (
    <View testID="separator" style={[styles.container, style]}>
      <View style={[styles.innerLine, !label && styles.innerLineNoLabel]} />
      {label && <Text style={styles.innerText}>{label}</Text>}
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
    // justifyContent: 'center'
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
    fontSize: fontScale(14),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: fontScale(19),
    marginHorizontal: horizontalScale(5),
  },
});

export default LineBreak;

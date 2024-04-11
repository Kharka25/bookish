import React from 'react';
import {Image, View, StyleSheet, ViewProps} from 'react-native';

import {Text} from '@components';

import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  message?: string;
  title?: string;
}

const Status: React.FC<Props> = props => {
  const {message, title} = props;
  return (
    <View style={styles.container} testID="status">
      <View>
        <Image
          style={styles.statusImg}
          source={require('@assets/images/statusImg.png')}
          testID="img"
        />
      </View>
      <Text content={title} style={styles.statusTitle} />
      <Text content={message} style={styles.statusMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(30),
  },
  statusImg: {
    height: verticalScale(100),
    marginVertical: verticalScale(30),
    width: horizontalScale(100),
  },
  statusMessage: {
    color: Colors.GRAY_50,
    fontSize: fontScale(16),
    textAlign: 'center',
  },
  statusTitle: {
    fontSize: fontScale(24),
    fontWeight: '700',
    marginBottom: verticalScale(10),
  },
});

export default Status;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Colors} from '@constants/colors';
import {horizontalScale, verticalScale} from '@utils/responsiveDesign';

interface Props {
  color?: string;
  size?: number;
  handleViewNotifications?: () => void;
}

const NotificationIcon: React.FC<Props> = props => {
  const {
    color = Colors.BLACK,
    handleViewNotifications: handleSearch,
    size = 16,
  } = props;
  return (
    <View>
      <View style={styles.hasNotificationContainer}>
        <View style={styles.hasNotication} />
      </View>
      <Icon name="bell" color={color} size={size} onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  hasNotication: {
    backgroundColor: Colors.RED,
    borderRadius: horizontalScale(20),
    height: verticalScale(4),
    width: horizontalScale(4),
  },
  hasNotificationContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: horizontalScale(20),
    justifyContent: 'center',
    padding: horizontalScale(1),
    position: 'absolute',
    left: horizontalScale(8),
    top: verticalScale(1),
    zIndex: 100,
    height: verticalScale(6),
    width: horizontalScale(8),
  },
});

export default React.memo(NotificationIcon);

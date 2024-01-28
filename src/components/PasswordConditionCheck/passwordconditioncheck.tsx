import React from 'react';
import {Text, View, StyleSheet, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {passwordCondition} from '@utils/helpers';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  conditions: Array<passwordCondition>;
}

const PasswordConditionCheck: React.FC<Props> = props => {
  const {conditions} = props;

  return conditions?.map((condition, index) => (
    <View key={index} style={styles.container} testID="password-checker">
      <Icon
        color={condition?.condition ? Colors.PRIMARY_LIGHT : Colors.RED}
        name={condition?.condition ? 'check' : 'times'}
        size={16}
        style={styles.icon}
      />
      <Text style={styles.valueText}>{condition?.value}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: verticalScale(10),
  },
  icon: {
    marginRight: horizontalScale(12),
  },
  valueText: {
    color: Colors.GRAY_50,
    fontSize: fontScale(14),
    fontWeight: '400',
  },
});

export default React.memo(PasswordConditionCheck);

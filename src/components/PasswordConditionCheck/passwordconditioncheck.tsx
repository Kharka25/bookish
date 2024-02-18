import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Text} from '@components';

import {passwordCondition} from '@utils/helpers';
import {horizontalScale, verticalScale} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

interface Props extends ViewProps {
  conditions: Array<passwordCondition>;
}

const PasswordConditionCheck: React.FC<Props> = props => {
  const {conditions} = props;

  const conditionsElements = conditions?.map((condition, index) => {
    return (
      <View key={index} style={styles.container}>
        <Icon
          color={condition?.condition ? Colors.PRIMARY_LIGHT : Colors.RED}
          name={condition?.condition ? 'check' : 'times'}
          size={16}
          style={styles.icon}
        />
        <Text content={condition?.value} style={styles.valueText} />
      </View>
    );
  });

  return <View testID="password-checker">{conditionsElements}</View>;
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
  },
});

export default React.memo(PasswordConditionCheck);

import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import {Colors} from '@constants/colors';

interface Props {
  privateIcon?: boolean;
}

const PasswordVisibilityIcon: React.FC<Props> = props => {
  const {privateIcon = true} = props;
  return (
    <Icon
      name={privateIcon ? 'eye-with-line' : 'eye'}
      color={Colors.GRAY_40}
      size={16}
      testID="visiblity-toggle"
    />
  );
};

export default React.memo(PasswordVisibilityIcon);

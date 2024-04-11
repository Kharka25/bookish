import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Text} from '@components';
import {fontScale} from '@utils/responsiveDesign';

interface Props {
  cancelLogout: () => void;
  loading: boolean;
  handleLogout: () => void;
}

const Logout: React.FC<Props> = props => {
  const {cancelLogout, handleLogout, loading} = props;
  return (
    <View>
      <Text content="Logout" fontSize={fontScale(16)} fontWeight="500" />
      <Button
        onPress={() => handleLogout()}
        label="Logout"
        labelStyle={styles.btnLabel}
        loading={loading}
        style={styles.btn}
      />
      <Button
        onPress={() => cancelLogout()}
        label="Cancel"
        labelStyle={styles.btnLabel}
        light
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: '5%',
  },
  btnLabel: {
    fontSize: fontScale(15),
    fontWeight: '500',
  },
});

export default React.memo(Logout);

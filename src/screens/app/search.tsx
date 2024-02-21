import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackIcon, Header, SearchIcon, TextInput} from '@components';
import {globalStyles} from '@utils/responsiveDesign';
import {Colors} from '@constants/colors';

const Search: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={globalStyles.phSm}>
        <Header
          leftIcon={<BackIcon />}
          containerStyle={[globalStyles.headerStyle, globalStyles.mbMD]}
          title="Search"
        />
        <TextInput
          leftIcon={<SearchIcon color={Colors.GRAY_40} size={20} />}
          placeholder="Search"
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

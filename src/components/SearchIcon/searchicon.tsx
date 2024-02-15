import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Colors} from '@constants/colors';

interface Props {
  color?: string;
  size?: number;
  handleSearch?: () => void;
}

const SearchIcon: React.FC<Props> = props => {
  const {color = Colors.BLACK, handleSearch, size = 16} = props;
  return (
    <Icon name="search" size={size} color={color} onPress={handleSearch} />
  );
};

export default React.memo(SearchIcon);

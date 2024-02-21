import {ImageSourcePropType} from 'react-native';

export interface UserProfileI {
  id: string;
  email: string;
  favorites?: [];
  phoneNumber?: string;
  profileImage?: ImageSourcePropType;
  username: string;
  verified: boolean;
}
export interface AuthStateI {
  access_token?: string | null;
  isAuth: boolean;
  isLoading: boolean;
  loggedIn: boolean;
  profile: UserProfileI | null;
}

export interface AuthorProfileI {
  id?: number;
  img: ImageSourcePropType;
  name: string;
  type: string;
}

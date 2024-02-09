export interface UserProfileI {
  id: string;
  email: string;
  username: string;
  verified: boolean;
}

export interface AuthStateI {
  isAuth: boolean;
  isLoading: boolean;
  loggedIn: boolean;
  profile: UserProfileI | null;
}

export interface UserProfileI {
  id: string;
  email: string;
  username: string;
  verified: boolean;
}

export interface AuthStateI {
  isLoading: boolean;
  loggedIn: boolean;
  profile: UserProfileI | null;
}

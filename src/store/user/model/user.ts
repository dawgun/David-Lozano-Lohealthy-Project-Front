export interface UserLoginState {
  isLogged: boolean;
  user: User;
}

export interface User {
  userName: string;
  image: string;
  token: string;
  id: string;
}

export interface UserLogin {
  userName: string;
  password: string;
}

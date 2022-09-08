export interface UserLoginState {
  isLogged: boolean;
  user: User;
}

export interface ProtoUser {
  userName: string;
  email: string;
  password: string;
  repeat_password: string;
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

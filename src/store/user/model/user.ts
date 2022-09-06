export interface UserLoginState {
  isLogged: boolean;
  user: {
    userName: string;
    image: string;
    token: string;
  };
}

export interface User {
  userName: string;
  image: string;
  token: string;
}

export interface UserLogin {
  userName: string;
  password: string;
}

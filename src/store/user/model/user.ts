export interface UserLoginState {
  isLogged: boolean;
  user: {
    userName: string;
    image: string;
  };
}

export interface User {
  userName: string;
  image: string;
}

export interface UserLogin {
  userName: string;
  password: string;
}

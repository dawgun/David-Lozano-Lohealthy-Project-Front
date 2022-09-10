export interface ProtoGame {
  title: string;
  image: string;
  players: string;
  genre: string;
  release: string;
  synopsis: string;
}

export interface Game extends ProtoGame {
  id: string;
  owner: string;
}

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
  backupImage: string;
}

interface OwnerDetailed {
  userName: string;
  id: string;
}
export interface DetailGame extends ProtoGame {
  id: string;
  owner: OwnerDetailed;
  backupImage: string;
}
export interface GameAPI {
  isPreviousPage: boolean;
  isNextPage: boolean;
  totalPages: number;
  currentPage: number;
  games: Game[];
}

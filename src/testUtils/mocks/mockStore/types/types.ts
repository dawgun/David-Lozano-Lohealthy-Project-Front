import { GameAPI } from "../../../../store/games/model/game";
import { UIState } from "../../../../store/UI/model/UI";
import { UserLoginState } from "../../../../store/user/model/user";

interface MockStoreProps {
  uiPreloadState?: UIState;
  userPreloadState?: UserLoginState;
  gamesPreloadState?: GameAPI;
}

export default MockStoreProps;

export interface Modal {
  message: string;
  type: boolean;
}

export interface UIState extends Modal {
  isModalShowing: boolean;
  isLoadingShowing: boolean;
  isMenuShowing: boolean;
}

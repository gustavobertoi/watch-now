import { Show } from "./index";

type EpisodesNavigationParams = {
  show: Show;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Episodes: EpisodesNavigationParams;
    }
  }
}

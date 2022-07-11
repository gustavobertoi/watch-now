import { Season, Show } from "./index";

export type EpisodesNavigationParams = {
  show: Show;
  season: Season;
};

export type SeasonsNavigationParams = {
  show: Show;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Episodes: EpisodesNavigationParams;
      Seasons: SeasonsNavigationParams;
    }
  }
}

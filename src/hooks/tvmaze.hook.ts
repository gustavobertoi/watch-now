import { TvMazeClient } from "../clients";

export function useTvMaze() {
  return TvMazeClient.getInstance();
}

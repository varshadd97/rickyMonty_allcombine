import { FETCH_EPISODE_REQUEST } from "../constant";

export const fetchEpisode = (action: number) => ({
  type: FETCH_EPISODE_REQUEST,
  payload: action,
});

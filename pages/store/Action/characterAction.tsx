import { FETCH_DATA_REQUEST } from "../constant";

export const fetchData = (action: number) => ({
  type: FETCH_DATA_REQUEST,
  payload: action,
});

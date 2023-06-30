/** @format */
import {
  FETCH_EPISODE_SUCCESS,
  FETCH_EPISODE_REQUEST,
  FETCH_EPISODE_FAILURE,
} from "../constant";
import { actionProps } from "../types";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const episodeReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case FETCH_EPISODE_REQUEST:
      return { ...state, loading: true, error: null ,};
    case FETCH_EPISODE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_EPISODE_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

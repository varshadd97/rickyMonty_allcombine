/** @format */
import {
  FETCH_EPISODE_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../constant";
import { actionProps } from "../types";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case FETCH_EPISODE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

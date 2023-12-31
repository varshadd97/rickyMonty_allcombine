/** @format */

import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_EPISODE_REQUEST,
  FETCH_EPISODE_SUCCESS,
  FETCH_EPISODE_FAILURE,
} from "./constant";
import { responseProps, actionProps } from "./types";

function* fetchDataSaga(action: actionProps) {
  try {
    const currentPage = action.payload;
    const response: responseProps = yield call(
      axios.get,
      `https://rickandmortyapi.com/api/character?page=${currentPage}`
    );
    const dataManager = Object.values(response.data);
    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: dataManager,
    });
  } catch (error: any) {
    console.log("error", error);
    yield put({ type: FETCH_DATA_FAILURE, error: error.message });
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

function* fecthEpisode(action: actionProps) {
  try {
    const currentPage = action.payload;
    const response: responseProps = yield call(
      axios.get,
      `https://rickandmortyapi.com/api/episode?page=${currentPage}`
    );
    const dataManager = Object.values(response.data);
    yield put({ type: FETCH_EPISODE_SUCCESS, payload: dataManager });
  } catch (error: any) {
    yield put({ type: FETCH_EPISODE_FAILURE, error: error.message });
  }
}

function* watchEpisodeData() {
  yield takeLatest(FETCH_EPISODE_REQUEST, fecthEpisode);
}

export default function* rootSaga() {
  yield all([watchFetchData(), watchEpisodeData()]);
}

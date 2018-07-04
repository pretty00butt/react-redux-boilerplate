/**
 * @module Sagas/Users
 * @desc User
 */
import { all, call, put, takeLatest } from "redux-saga/effects";

import * as UsersActions from "../actions/UsersActions";
import * as ActionTypes from "../constants/actionTypes";

/**
 * Login
 */
export function* getUsers() {
  try {
    yield call(UsersActions.getUsers);
    yield put({
      type: ActionTypes.GET_USERS_SUCCESS
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_USERS_FAILED,
      payload: err
    });
  }
  // try {
  //   yield call(delay, 400);

  //   yield put({
  //     type: ActionTypes.USER_LOGIN_SUCCESS
  //   });
  // } catch (err) {
  //   /* istanbul ignore next */
  //   yield put({
  //     type: ActionTypes.USER_LOGIN_FAILURE,
  //     payload: err
  //   });
  // }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.GET_USERS_REQUEST, getUsers)]);
}

import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import getTodosSaga from "./getTodoSaga";

export default function* rootSaga() {
  yield all([userSaga(), getTodosSaga()]);
}

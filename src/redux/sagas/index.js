import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import getTodosSaga from "./getTodoSaga";
import deleteTodoSaga from "./deleteTodoSaga";
import insertTodoSaga from "./insertTodoSaga";

export default function* rootSaga() {
  yield all([userSaga(), getTodosSaga(), deleteTodoSaga(), insertTodoSaga()]);
}

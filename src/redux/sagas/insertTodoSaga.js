import { call, put, takeEvery } from "redux-saga/effects";
import { GET_TODO_REQUEST, INSERT_TODO_REQUEST } from "../types";
import firestoreDB from "../../firebase/firestore";

const dbInsertTodo = async (todo) => {
  const response = await firestoreDB.collection("todo").add(todo);
  return response;
};

function* sagaInsertTodo(action) {
  try {
    yield call(dbInsertTodo(action.payload), action.payload);
    yield put({
      type: GET_TODO_REQUEST,
    });
  } catch (error) {
    yield put({
      type: GET_TODO_REQUEST,
    });
  }
}

function* insertTodoSaga() {
  yield takeEvery(INSERT_TODO_REQUEST, sagaInsertTodo);
}

export default insertTodoSaga;

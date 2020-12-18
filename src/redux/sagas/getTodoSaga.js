import { call, put, takeEvery } from "redux-saga/effects";
import { GET_TODO_FAILED, GET_TODO_SUCCESS, GET_TODO_REQUEST } from "../types";
import firestoreDB from "../../firebase/firestore";

const dbGetTodos = async () => {
  const result = await firestoreDB.collection("todo").get();
  return result.json();
};

export function* sagaGetTodos(action) {
  console.log("saga");
  try {
    const response = yield call(dbGetTodos, action.payload);
    yield put({
      type: GET_TODO_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: GET_TODO_FAILED,
      payload: error.message,
    });
  }
}

function* getTodosSaga() {
  console.log("getTodos");
  yield takeEvery(GET_TODO_REQUEST, sagaGetTodos);
}

export default getTodosSaga;

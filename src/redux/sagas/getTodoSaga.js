import { call, put, takeEvery } from "redux-saga/effects";
import { GET_TODO_FAILED, GET_TODO_SUCCESS, GET_TODO_REQUEST } from "../types";
import firestoreDB from "../../firebase/firestore";

const dbGetTodos = async () => {
  let result = [];
  const response = await firestoreDB.collection("todo").get();
  response.forEach((doc) => {
    result.push({ data: doc.data(), id: doc.id });
  });
  return result;
};

export function* sagaGetTodos(action) {
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
  yield takeEvery(GET_TODO_REQUEST, sagaGetTodos);
}

export default getTodosSaga;

import { call, put, takeEvery } from "redux-saga/effects";
import {
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  GET_TODO_REQUEST,
} from "../types";
import firestoreDB from "../../firebase/firestore";

const dbDeleteTodo = async (id) => {
  const response = await firestoreDB.collection("todo").doc(id).delete();
  return response;
};

function* sagaDeleteTodo(action) {
  try {
    const response = yield call(dbDeleteTodo(action.payload), action.paylaod);
    yield put({
      type: DELETE_TODO_SUCCESS,
      paylaod: response,
    });
  } catch (error) {
    yield put({
      type: GET_TODO_REQUEST,
    });
  }
}

function* deleteTodoSaga() {
  yield takeEvery(DELETE_TODO_REQUEST, sagaDeleteTodo);
}

export default deleteTodoSaga;

import { call, put, takeEvery } from "redux-saga/effects";
import { EDIT_TODO_SUCCESS, EDIT_TODO_REQUEST } from "../types";
import firestoreDB from "../../firebase/firestore";

const dbEditTodo = async (payload) => {
  const response = await firestoreDB
    .collection("todo")
    .doc(payload.id)
    .update(payload.modify);
  return response;
};

export function* sagaEditTodo(action) {
  try {
    const response = yield call(dbEditTodo(action.payload), action.payload);
    yield put({
      type: EDIT_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: EDIT_TODO_SUCCESS,
      payload: action.payload,
    });
  }
}

function* editSagaTodo() {
  yield takeEvery(EDIT_TODO_REQUEST, sagaEditTodo);
}

export default editSagaTodo;

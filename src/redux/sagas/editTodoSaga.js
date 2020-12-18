import { call, put, takeEvery } from "redux-saga/effects";
import { GET_TODO_REQUEST, EDIT_TODO_REQUEST } from "../types";
import firestoreDB from "../../firebase/firestore";

const dbEditTodo = async (payload) => {
  const response = await firestoreDB
    .collection("todo")
    .doc(payload.id)
    .update(payload.modify);
  return response;
};

export function* sagaEditTodo(action) {
  console.log("saga");
  try {
    const response = yield call(dbEditTodo(action.payload, action.payload));
    yield put({
      type: GET_TODO_REQUEST,
    });
  } catch (error) {
    yield put({
      type: GET_TODO_REQUEST,
    });
  }
}

function* editSagaTodo() {
  yield takeEvery(EDIT_TODO_REQUEST, sagaEditTodo);
}

export default editSagaTodo;

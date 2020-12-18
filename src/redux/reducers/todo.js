import { GET_TODO_SUCCESS, GET_TODO_FAILED } from "../types";

function getTodos(state = {}, action) {
  switch (action.type) {
    case GET_TODO_SUCCESS:
      state.todo = action.payload;
      break;
    case GET_TODO_FAILED:
      state.todo = action.payload;
      break;
    default:
      break;
  }

  return state;
}

export default getTodos;

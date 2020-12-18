import { GET_TODO_SUCCESS, GET_TODO_FAILED, EDIT_TODO_SUCCESS } from "../types";

function getTodos(state = {}, action) {
  switch (action.type) {
    case GET_TODO_SUCCESS:
      state.todo = action.payload;
      break;
    case GET_TODO_FAILED:
      state.todo = action.payload;
      break;
    case EDIT_TODO_SUCCESS:
      console.log(action.payload);
      state["todo"].forEach((element) => {
        if (element.id === action.payload.id) {
          element.data.todo = action.payload.modify.todo;
        }
        return state.todo;
      });
    default:
      break;
  }

  return state;
}

export default getTodos;

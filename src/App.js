import "./App.css";
import firestoreDB from "./firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [newTodo, setNewTodo] = useState();
  const [todoModify, setTodoModify] = useState();
  const todos = useSelector((state) => state.getTodos.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_TODO_REQUEST" });
  }, []);

  const todoDelete = (id) => {
    dispatch({ type: "DELETE_TODO_REQUEST", payload: id });
  };

  const addNewTodo = () => {
    const nuovoTodo = { complete: false, todo: newTodo };
    firestoreDB.collection("todo").add(nuovoTodo);
    setNewTodo(" ");
  };

  const todoModifyUpdate = (id) => {
    const modify = { complete: true, todo: todoModify };
    firestoreDB.collection("todo").doc(id).update(modify);
    console.log(id);
  };

  return (
    <div className="App">
      <div>
        <input
          value={newTodo}
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={addNewTodo}>Inserisci</button>
      </div>
      {todos &&
        todos.map((todo) => (
          <>
            <div key={todo.id}>
              <p>
                {todo.data.todo} complete {todo.data.complete}
              </p>
              <input
                type="text"
                onChange={(e) => setTodoModify(e.target.value)}
              ></input>
              <button onClick={() => todoModifyUpdate(todo.id)}>
                Modifica
              </button>
              <button onClick={() => todoDelete(todo.id)}>Elimina</button>
            </div>
          </>
        ))}
    </div>
  );
}

export default App;

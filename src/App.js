import "./App.css";
import firestoreDB from "./firebase/firestore";
import { useEffect, useState } from "react";
import Users from "./components/UsersComponents";

function App() {
  const [prevState, setState] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [todoModify, setTodoModify] = useState();

  useEffect(async () => {
    const result = await firestoreDB.collection("todo").get();

    result.forEach((doc) => {
      setState((prevState) => [...prevState, { data: doc.data(), id: doc.id }]);
    });
  }, []);

  const todoDelete = (id) => {
    console.log(id);
    firestoreDB.collection("todo").doc(id).delete();
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
      {prevState &&
        prevState.map((todo) => (
          <>
            <p>
              {todo.data.todo} complete {todo.data.complete}
            </p>
            <input
              type="text"
              onChange={(e) => setTodoModify(e.target.value)}
            ></input>
            <button onClick={() => todoModifyUpdate(todo.id)}>Modifica</button>
            <button onClick={() => todoDelete(todo.id)}>Elimina</button>
          </>
        ))}
    </div>
  );
}

export default App;

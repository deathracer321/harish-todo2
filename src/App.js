import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { createContext, useState, useEffect } from "react";
import { generateRandomColor } from "./components/TodoList";
export const MyContext = createContext();

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (todoList?.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));

    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  return (
    <MyContext.Provider value={{ todoList, setTodoList }}>
      <div className="App" style={{ backgroundColor: generateRandomColor() }}>
        <br></br>

        <h1>Note your Todo's here...</h1>

        <br />
        <hr />
        <AddTodo />
        <br />
        <TodoList />
      </div>
    </MyContext.Provider>
  );
}

export default App;

//while taking the input  - select(professional or personal), input text , date created and date aimed to complete
//edit ( pending inprogress done) , add or remove item, change date

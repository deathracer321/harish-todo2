import React, { useContext } from "react";
import "./TodoList.css";
import { MyContext } from "../App";

export const generateRandomColor = () => {
  const letters = "89ABCDEF"; // Higher range of values for lighter colors
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

function TodoList() {
  const { todoList, setTodoList } = useContext(MyContext);

  const randomColor = generateRandomColor();

  const deleteTodoHandler = (event) => {
    let newArr = [...todoList];
    newArr.splice(event.target.value, 1);
    setTodoList(newArr);

    if (!newArr?.length) {
      localStorage.removeItem("todoList");
    }
  };

  const onChangeHandler = (event, index) => {
    let newArr = [...todoList];

    if (event.target.name === "status") {
      newArr[index].status = event.target.value;
    } else if (event.target.name === "inputDate") {
      newArr[index].inputDate = event.target.value;
    }

    setTodoList(newArr);
  };

  return (
    <div className="todoList-content">
      {(function abc() {
        if (todoList.length) {
          return (
            <table className="todoList-table">
              <tbody>
                <tr style={{ backgroundColor: generateRandomColor() }}>
                  <th>Task</th>
                  <th>TODO</th>
                  <th>PER/PRO</th>
                  <th>Aimed Date</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
                {todoList?.map((eachTodo, ind) => {
                  return (
                    <tr key={ind} style={{ backgroundColor: randomColor }}>
                      <td>{ind + 1}</td>
                      <td>{eachTodo.addTodoValue}</td>
                      <td>{eachTodo.selectedOption}</td>
                      <td>
                        {eachTodo.inputDate}

                        <br></br>
                        <input
                          required
                          type="date"
                          onChange={(event) => onChangeHandler(event, ind)}
                          name="inputDate"
                          id="inputDate"
                        />
                      </td>
                      <td>
                        {eachTodo.status}
                        <br></br>
                        <select
                          name="status"
                          id="selectedOption"
                          onChange={(event) => onChangeHandler(event, ind)}
                        >
                          <option value="">Edit</option>
                          <option value="Pending">Pending</option>
                          <option value="InProgress">In-Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td>
                        <button
                          value={ind}
                          onClick={deleteTodoHandler}
                          className="todoList-deleteButton"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        }
      })()}
    </div>
  );
}

export default TodoList;

// number   todo    P/P   DateFixed  status

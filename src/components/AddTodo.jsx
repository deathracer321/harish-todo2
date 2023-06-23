import React, { useState, useContext } from "react";
import "./AddTodo.css";
import { MyContext } from "../App";

function AddTodo() {
  const { setTodoList } = useContext(MyContext);

  const [allFormValues, setAllFormValues] = useState({
    addTodoValue: "",
    selectedOption: "select",
    inputDate: "",
    status: "select",
  });

  const onChangeHandler = (e) => {
    setAllFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    // e.preventDefault();

    setTodoList((prev) => {
      return [...prev, { ...allFormValues }];
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="addTodo-form">
      <table className="addTodo-table">
        <tbody>
          <tr>
            <td className="addTodo-td">
              <label htmlFor="addTodoValue">What are you up to ? </label>
            </td>
            <td className="addTodo-td">
              <input
                required
                placeholder="Type Something..."
                type="text"
                value={allFormValues?.addTodoValue}
                onChange={onChangeHandler}
                name="addTodoValue"
                id="addTodoValue"
              />
            </td>
          </tr>

          <tr>
            <td className="addTodo-td">
              <label htmlFor="selectedOption">
                Is it Professional Or Personal ?
              </label>
            </td>
            <td className="addTodo-td">
              <select
                name="selectedOption"
                id="selectedOption"
                onChange={onChangeHandler}
                className="addtodo-select"
                required
              >
                <option value="">select</option>
                <option value="Professional">Professional</option>
                <option value="Personal">Personal</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="addTodo-td">
              <label htmlFor="inputDate">
                When are you planning to complete it ?
              </label>
            </td>
            <td className="addTodo-td">
              <input
                required
                type="date"
                value={allFormValues?.inputDate}
                onChange={onChangeHandler}
                name="inputDate"
                id="inputDate"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit" className="addTodo-submit">
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default AddTodo;

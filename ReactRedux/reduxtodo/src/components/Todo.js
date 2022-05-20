import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

import "./todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="write Add Items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div>
            <div className="showItems">
              <div className="eachItem">
                <h3>test</h3>
                <i
                  className="far fa-trash-alt add-btn"
                  title="Delete Item"
                  onClick={() =>
                    dispatch(deleteTodo(inputData), setInputData(""))
                  }
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

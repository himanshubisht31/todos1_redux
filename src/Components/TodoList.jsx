import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";

import { toggleTask, deleteTask } from "../Redux/action";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const [modal, setModal] = useState(false);
  const [taskId, setTaskId] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((ele) => (
        <div key={ele.id}>
          <div>{ele.title}</div>
          <button onClick={() => dispatch(deleteTask(ele.id))}>DELETE</button>
          <button
            onClick={() => {
              setModal(!modal);
              setTaskId(ele.id);
            }}
          >
            EDIT
          </button>
        </div>
      ))}

      {modal && <Modal id={taskId} />}
    </div>
  );
}

import React from "react";
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask } from "../Redux/action";
import { useState } from "react";

export default function Modal({ id }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [view, setView] = useState(true);

  return view ? (
    <div>
      <div className="outer">
        <div className="inner">
          {todos.map((ele) => (
            <div key={ele.id}>
              {ele.id === id ? (
                <div>
                  <button onClick={() => dispatch(toggleTask(id))}>
                    {" "}
                    STATUS - {ele.status ? "DONE" : "PENDING"}
                  </button>
                </div>
              ) : null}
            </div>
          ))}

          <button
            onClick={() => {
              setView(!view)
            }}
          >
            <b>X</b>
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

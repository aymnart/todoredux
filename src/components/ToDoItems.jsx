import { useState } from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggle } from "../redux/toDoSlice";

const ToDoItems = ({ text, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <label htmlFor="checked">
          <img
            className="w-7"
            onClick={() => dispatch(toggle(id))}
            src={toggle ? tick : not_tick}
            alt=""
          />
        </label>
        <input type="checkbox" id="checked" />

        <p
          onClick={() => dispatch(toggle(id))}
          style={toggle ? { textDecoration: "line-through" } : {}}
          className="text-slate-700 ml-4 text-base"
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
        className="w-3.5 cursor-pointer"
        src={delete_icon}
        alt=""
      />
    </div>
  );
};

ToDoItems.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
};
export default ToDoItems;

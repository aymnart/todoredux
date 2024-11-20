import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import ToDoItems from "./ToDoItems";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/toDoSlice";

const ToDo = () => {
  const toDoSlice = useSelector((state) => state.todo);
  console.log(toDoSlice);
  const dispatch = useDispatch();

  // const [toDoList, setToDoList] = useState(() => {
  //   return savedTasks ? JSON.parse(savedTasks) : [];
  // });
  const inputRef = useRef();
  ////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   return localStorage.setItem("tasks", JSON.stringify(toDoSlice));
  // }, [toDoSlice]);
  ///////////////////////////////////////////////////////////
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    dispatch(addTodo(newTodo));
    inputRef.current.value = "";
  };

  return (
    <div className=" flex bg-white place-self-center w-11/12 max-w-md flex-col p-7 min-h-[550px] rounded-xl">
      {/*-----title-----*/}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-do list</h1>
      </div>
      {/*-----input box-----*/}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 h-14 w-[39%] text-white text-lg font-medium cursor-pointer hover:bg-orange-500 active:bg-orange-600"
        >
          Add task
        </button>
      </div>
      {/*-----todo list-----*/}
      <div className="todo pr-9">
        {toDoSlice.map((item, index) => (
          <ToDoItems
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDo;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4(), text: "Doing Homeworks", done: false },
  { id: uuidv4(), text: "i have to see some friends !", done: true },
  { id: uuidv4(), text: "Learning more of Redux", done: false },
];

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state = [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo.id == action.payload.id);
    },
    toggle: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggle } = toDoSlice.actions;
export default toDoSlice.reducer;

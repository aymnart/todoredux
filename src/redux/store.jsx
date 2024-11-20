import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./toDoSlice";

export default configureStore({
  reducer: { todo: toDoSlice },
});

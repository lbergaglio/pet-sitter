import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import petSitterReducer from "./petSitterSlice";

export const store = configureStore({
  reducer: { user: usersReducer, petSitter: petSitterReducer },
});

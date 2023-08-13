import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Slice/UserSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/redux/slice/loginSlice";
import commentsSlice from "./slice/commentsSlice";
const store = configureStore({
  reducer: {
    login: loginReducer,
    comments: commentsSlice,
  },
});

export default store;

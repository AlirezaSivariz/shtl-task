import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/redux/slice/loginSlice";
loginReducer;
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;

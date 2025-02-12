import { configureStore } from "@reduxjs/toolkit";
import apiKeyReducer from "./slice/apiKeySlice";

const store = configureStore({
  reducer: {
    apiKey: apiKeyReducer,
  },
});

export default store;

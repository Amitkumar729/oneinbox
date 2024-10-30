import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chatSlice";
import themeReducer from "./reducers/themeSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

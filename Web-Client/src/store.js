import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import authInReducer from "./features/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducerCount = persistReducer(persistConfig, counterReducer);
const persistedReducerAuth = persistReducer(persistConfig, authInReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    count: persistedReducerCount,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);

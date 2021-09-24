import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistedReducer } from "./root.reducer";

const middleWares: any[] = [];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);

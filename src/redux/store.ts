import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistedReducer } from "./root.reducer";
// import { persistStore } from "redux-persist";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./root.saga";

// const sagaMiddleware = createSagaMiddleware();

const middleWares: any[] = [];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

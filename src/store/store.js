import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/combineReducers";
import createList from "../middlewares/createList.middleware";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createList)
);

export default store;

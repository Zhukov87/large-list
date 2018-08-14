import { combineReducers } from "redux";
import largeList from "./largeList.reducer";
import filters from "./filters.reducer";

export default combineReducers({ largeList, filters });

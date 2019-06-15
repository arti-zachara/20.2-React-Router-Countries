// -- to be able to add new reducers - combine reducers
import { combineReducers } from "redux";
import countriesReducer from "./countries-reducer";

const reducers = combineReducers({
  countriesReducer
});

export default reducers;

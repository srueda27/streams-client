import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

//ReduxForm has to be assign to a variable called 'form'
export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  streams: streamReducer
});

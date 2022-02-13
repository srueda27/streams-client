import _ from "lodash";
import {
  LIST_STREAMS,
  GET_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

//state (streams from then index reducer) is going to be an object ( {} ) of objects Stream  { id: { stream }, id: { stream } }
export default (state = {}, action) => {
  switch (action.type) {
    case LIST_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case GET_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      //Key interpolation [action.payload.id]: something
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
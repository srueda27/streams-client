import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  LIST_STREAMS,
  GET_STREAM
} from "./types"

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

//the getState function let us get the state of the app stored inside redux
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  //Do some programmatic navigation, after the endpoint sent the response
  //Using our own history object push() is the method we use to move from one page to another
  history.push('/');
};

export const listStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({
    type: LIST_STREAMS,
    payload: response.data
  });
};

export const getStream = streamId => async dispatch => {
  const response = await streams.get(`/streams/${streamId}`);

  dispatch({
    type: GET_STREAM,
    payload: response.data
  });
};

export const updateStream = (streamId, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${streamId}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });

  history.push('/');
};

export const deleteStream = streamId => async dispatch => {
  await streams.delete(`/streams/${streamId}`);

  dispatch({
    type: DELETE_STREAM,
    payload: streamId
  });

  history.push('/');
};

import * as ActionTypes from '../actionTypes';

export const addSignup = (data) => (dispatch) => {
    dispatch({type: ActionTypes.ADD_SIGNUP, payload: data})
}
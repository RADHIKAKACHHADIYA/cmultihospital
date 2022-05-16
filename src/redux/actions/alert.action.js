import * as ActionTypes from "../actionTypes";

export const setAlert = (text, color) => (dispatch) => {
    dispatch({ type: ActionTypes.SET_ALERT_MSG, payload: { text, color } })
} 

export const resetAlert = () => (dispatch) => {
    dispatch({ type: ActionTypes.RESET_ALERT_MSG })
}

import * as ActionTypes from '../actionTypes';

const initialValue = {
  text: '',
  color:''
}

export const alertReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionTypes.SET_ALERT_MSG:
            return {
                ...state,
                text: action.payload.text,
                color:action.payload.color
            }
            case ActionTypes.RESET_ALERT_MSG:
            return {
                ...state,
                text: '',
                color:''
            }
        default:
            return state;
    }
}
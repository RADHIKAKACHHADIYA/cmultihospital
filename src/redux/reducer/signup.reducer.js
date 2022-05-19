import * as ActionTypes from '../actionTypes';

const initialValue = {
    users: [],
    errorMsg: '',
    isLoading: false
}

export const signupReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionTypes.ADD_SIGNUP:
            return {
                ...state,
                users: state.signup.concat(action.payload),
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.LOGIN_AUTH:
            return {
                ...state,
                users: action.payload
            }
        case ActionTypes.LOGOUT_AUTH:
            return {
                ...state, 
                users:''
            }
        default:
            return state;
    }
}
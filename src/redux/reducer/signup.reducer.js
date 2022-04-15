import * as ActionTypes from '../actionTypes';

const initialValue = {
    signup: [],
    errorMsg: '',
    isLoading: false
}

export const signupReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionTypes.ADD_SIGNUP:
            return {
                ...state,
                signup: state.signup.concat(action.payload),
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}
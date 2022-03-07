import * as ActionTypes from "../ActionTypes";

const initialValue = {
    medicine : [],
    errMessage : '',
    isLoading : false
}

const medicineReducer = (state=initialValue , Action) => {
    switch (Action.type) {
        case ActionTypes.LODING_MEDICINE :
            return {
                ...state,
                medicine : [],
                isLoading : Action.payload,
                errMessage : '',
            }
        case ActionTypes.FATCH_MEDICINE :
            return {
                ...state,
                medicine : Action.payload,
                errMessage : '',
                isLoading : false
            }
        case ActionTypes.ERROR_MEDICINE :
            return {
                ...state,
                medicine : [],
                errMessage : Action.payload,
                isLoading : false
            }
            default :
                return state;
    }

}

export default medicineReducer;
import * as actionTypes from "../actionTypes";

const initialValue = {
    medicine : [],
    errMessage : '',
    isLoading : false
}

const medicineReducer = (state=initialValue , Action) => {
    switch (Action.type) {
        case actionTypes.LODING_MEDICINE :
            return {
                ...state,
                medicine : [],
                isLoading : Action.payload,
                errMessage : ''

            }
        case actionTypes.FATCH_MEDICINE :
            return {
                ...state,
                medicine : Action.payload,
                errMessage : '',
                isLoading : false
            }
        case actionTypes.ERROR_MEDICINE :
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
import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import medicineReducer from "./medicine.reducer";

const rootReducer = combineReducers ({
    medicine :  medicineReducer,
    alert:alertReducer
})

export default rootReducer;
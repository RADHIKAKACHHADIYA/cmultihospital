import { fatchAllMedicineData } from "../../common/api/medicine_api";
import baseUrl from "../../url/baseUrl";
import * as ActionTypes from "../actionTypes"


export const fetchmedicine = () => (dispatch) => {
  dispatch(loadindMedicine(true))
//   try {
//     fatchAllMedicineData()
//         .then(response => dispatch({ type: ActionTypes.FATCH_MEDICINE, payload: response.data }))
//         .catch(error => dispatch(errorMedicine(error)));
// } catch (error) {
//     dispatch(errorMedicine(error));
// }
  setTimeout (function () {
    return fetch(baseUrl + 'medicine')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ' : ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(response => response.json())
      .then(medicines => dispatch({ type: ActionTypes.FATCH_MEDICINE, payload: medicines }))
      .catch(error => dispatch(errorMedicine(error.message)));
    }, 1000)
}
export const loadindMedicine = (status) => (dispatch) => {
  dispatch({
    type: ActionTypes.LODING_MEDICINE,
    payload: status
  })
}
export const errorMedicine = (error) => (dispatch) => {
      dispatch({
        type:  ActionTypes.ERROR_MEDICINE ,
        payload: error
      })

}
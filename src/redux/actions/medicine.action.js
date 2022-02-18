import baseUrl from "../../url/baseUrl";
import * as actionTypes from "../actionTypes";


export const fetchmedicine = () => (dispatch) => {
  dispatch(loadindMedicine(true))
  setTimeout (function () {
    return fetch(baseUrl + 'medicines')
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
      .then(medicines => dispatch({ type: actionTypes.FATCH_MEDICINE, payload: medicines }))
      .catch(error => dispatch(errorMedicine(error)));
    }, 1000)
}
export const loadindMedicine = (status) => (dispatch) => {
  dispatch({
    type: actionTypes.LODING_MEDICINE,
    payload: status
  })
}
export const errorMedicine = (error) => (dispatch) => {
      dispatch({
        type:  actionTypes.ERROR_MEDICINE ,
        payload: error
      })

}
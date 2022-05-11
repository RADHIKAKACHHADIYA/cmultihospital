import * as ActionTypes from '../actionTypes';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";

export const signUpUser = (name, email, password) => (dispatch) => {
  console.log(email, password);
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)

        sendEmailVerification(user)
          .then(() => {
            console.log("verification mail send on your email address")
          });

      })
      dispatch({type:ActionTypes.SIGNUP_AUTH , payload:email})

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode)
    console.log(errorMessage)
  }
}

// export const addSignup = (data) => (dispatch) => {
  // try {
        //     const docRef = await addDoc(collection(db, "users"), {
        //         email: data.email,
        //         password: data.password
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //     dispatch({type: ActionTypes.ADD_SIGNUP, payload: data})
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }
// }
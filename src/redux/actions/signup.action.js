import * as ActionTypes from '../actionTypes';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const signUpUser = (value) => (dispatch) => {
  console.log(value.email, value.password);
  try {
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(user)
          .then(() => {
            console.log("verification mail send on your email address")
          });
        dispatch({ type: ActionTypes.SIGNUP_AUTH, payload: value.email })
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + errorMessage)
      });
  } catch (e) {
    console.log(e)
  }
}


export const loginUser = (value) => (dispatch) => {
  signInWithEmailAndPassword(auth, value.email, value.password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log("user login successfully")
      } else {
        console.log("please verify your email")
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)

      if (errorCode === "auth/user-not-found") {
        console.log("User does not exist")
      } else if (errorCode === "auth/wrong-password") {
        console.log("Invalid email or password")
      }
    });

}

export const googleSignupAuth = (value) => (dispatch) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      sendEmailVerification(user)
        .then(() => {
          console.log("verification mail send on your email address")
        });
      dispatch({ type: ActionTypes.GOOGLE_AUTH, payload: value.email })
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
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


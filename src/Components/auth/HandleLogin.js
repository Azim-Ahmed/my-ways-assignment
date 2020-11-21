import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from "../firebase.config";

export const initializeFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const createUserWithEmailAndPassword = ({
  firstName,
  lastName,
  email,
  password,
}) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const name = `${firstName + " " + lastName}`;
      const { email } = res.user;
      const singedInUser = {
        name,
        email,
      };
      
      verifyEmail();
      return singedInUser;
    })
    .catch((error) => {
      const errors = {};
      if (error.code === "auth/email-already-in-use") {
        errors.error =
          "The email address is already in use by another account!";
      } else {
        errors.error = error.message;
      }
      return errors;
    });
};

export const signInWithEmailAndPassword = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email, emailVerified } = res.user;
      const user = {
        name: displayName,
        email: email,
        emailVerified,
      };
      if (!emailVerified) {
        verifyEmail();
      }
      return user;
    })
    .catch((error) => {
      const errors = {};
      if (error.code === "auth/user-not-found") {
        errors.error = "No user found with this email!";
      } else if (error.code === "auth/wrong-password") {
        errors.error = "The password that you've entered is incorrect!";
      } else {
        errors.error = error.message;
      }
      return errors;
    });
};

const verifyEmail = () => {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function () { })
    .catch((error) => { });
};

export const getCurrentUser = () => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const { displayName, email, photoURL, emailVerified } = user;
        const currentUser = {
          name: displayName,
          email: email,
          photo: photoURL,
          emailVerified,
        };
        resolve(currentUser);
        // ...
      } else {
        resolve(user);
      }
    });
  });
};

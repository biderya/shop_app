import React, { useEffect } from "react";
import router from "next/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import initFirebase from "../firebase/clientApp";

initFirebase();
const auth = firebase.auth();

const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (!authUser) {
          router.push("/signin");
        }
      });
    }, []);

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  return Auth;
};

export default withAuth;

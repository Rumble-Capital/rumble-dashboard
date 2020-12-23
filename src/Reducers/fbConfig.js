import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfigCredentials = {
  apiKey: "AIzaSyD0RdHCra6P6639Ho_1FuxEq3MGQyxV0Lw",
  authDomain: "taskrrrr.firebaseapp.com",
  databaseURL: "https://taskrrrr.firebaseio.com",
  projectId: "taskrrrr",
  storageBucket: "taskrrrr.appspot.com",
  messagingSenderId: "717116545352",
  appId: "1:717116545352:web:be11f26dc0dcbcf2"
};

export const config = fbConfigCredentials;

firebase.initializeApp(config);
firebase.firestore(); //.settings({ timestampsInSnapshots: true });

export default firebase;

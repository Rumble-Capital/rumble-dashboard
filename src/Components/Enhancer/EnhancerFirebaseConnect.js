import { firestoreConnect } from "react-redux-firebase";

//connect to firestore and identify the connection point
export const EnhancerFirebaseConnect = firestoreConnect([
  {
    collection: "fields"
  }
]);

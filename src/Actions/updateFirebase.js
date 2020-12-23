//given a dictionary and a collection name, update that collection with the item_dict
export const createItem = (item_dict, collection_name) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    const button_id = item_dict.id;
    const collection_name_uppercase = collection_name.toUpperCase();
    firestore
      .collection(collection_name)
      .add({
        ...item_dict,
        uid: authorId,
        createdAt: new Date(),
        time_stamp: moment().format()
      })
      .then(() => {
        dispatch({ type: `CREATE_${collection_name_uppercase}_SUCCESS` });
      })
      .catch(err => {
        dispatch({ type: `CREATE_${collection_name_uppercase}_ERROR` }, err);
      });
  };
};

//given a dictionary and a collection name, update that collection with the item_dict's ID associated
export const updateItem = (button_dict, collection_name) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "null";
    const button_id = button_dict.id;
    const collection_name_uppercase = collection_name.toUpperCase();
    firestore
      .collection(collection_name)
      .doc(button_id)
      .set({
        ...button_dict,
        uid: authorId,
        createdAt: new Date(),
        time_stamp: moment().format()
      })
      .then(() => {
        dispatch({ type: `UPDATE_${collection_name_uppercase}_SUCCESS` });
      })
      .catch(err => {
        dispatch({ type: `UPDATE_${collection_name_uppercase}_ERROR` }, err);
      });
  };
};
//given a dictionary and a collection name, delete that collection with the item_dict's ID associated
export const deleteItem = (button_dict, collection_name) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "null";
    const button_id = button_dict.id;
    const collection_name_uppercase = collection_name.toUpperCase();

    firestore
      .collection(collection_name)
      .doc(button_id)
      .delete()
      .then(() => {
        dispatch({ type: `DELETE_${collection_name_uppercase}_SUCCESS` });
      })
      .catch(err => {
        dispatch({ type: `DELETE_${collection_name_uppercase}_SUCCESS` }, err);
      });
  };
};

//this is the firebase function that is triggered when a button is pushed
export const pushButton = button_dict => {
  return (dispatch, getState, { getFirestore }) => {
    // var current_state = getState();
    // console.log({ current_state });
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    const button_id = button_dict.id;
    firestore
      .collection("pushes")
      //.doc(button_id)
      .add({
        ...button_dict,
        uid: authorId,
        createdAt: new Date(),
        time_stamp: moment().format()
      })
      .then(() => {
        dispatch({ type: "CREATE_PUSH_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PUSH_ERROR" }, err);
      });
  };
};

//when a button is created
export const setButton = button_dict => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    const button_id = button_dict.id;
    firestore
      .collection("buttons")
      .doc(button_id)
      .set({
        ...button_dict,
        uid: authorId,
        createdAt: new Date(),
        time_stamp: moment().format()
      })
      .then(() => {
        dispatch({ type: "SET_BUTTON_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SET_BUTTON_ERROR" }, err);
      });
  };
};

//when a push is created
export const setPush = button_dict => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    const button_id = button_dict.id;
    firestore
      .collection("pushes")
      .doc(button_id)
      .set({
        ...button_dict,
        uid: authorId,
        createdAt: new Date(),
        time_stamp: moment().format()
      })
      .then(() => {
        dispatch({ type: "SET_PUSH_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SET_PUSH_ERROR" }, err);
      });
  };
};
//when a button is deleted
export const deletePush = push_dict => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    const button_id = push_dict.id;
    firestore
      .collection("pushes")
      .doc(button_id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_PUSH_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_PUSH_ERROR" }, err);
      });
  };
};
//when a button is deleted
export const deleteButton = button_dict => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    const button_id = button_dict.id;
    firestore
      .collection("buttons")
      .doc(button_id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_BUTTON_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_BUTTON_ERROR" }, err);
      });
  };
};
export const signIn = credentials => {
  console.log({ credentials });
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log({ err });
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signInAnonymous = credentials => {
  console.log({ credentials });
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signInGoogle = credentials => {
  console.log({ credentials });
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .login({ provider: "google", type: "popup" })
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "NULL";
    firestore
      .collection("projects")
      .doc(authorId)
      .set({
        ...project //,
        // authorFirstName: profile.firstName,
        // authorLastName: profile.lastName,
        // authorId: authorId,
        // createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
export const createTimer = timer_dict => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const firebase_state = getState().firebase;
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "";
    const email = getState().firebase.auth.email || "";
    const result_dict = {
      ...timer_dict,
      user_name: profile.firstName || "",
      email: email,
      uid: authorId,
      timestamp: new Date()
    };
    firestore
      .collection("timers")
      .doc(authorId)
      .set(result_dict)
      .then(() => {
        console.log({ success: result_dict });
        dispatch({ type: "CREATE_TIMER_SUCCESS" });
      })
      .catch(err => {
        console.log({ err: err });
        dispatch({ type: "CREATE_TIMER_ERROR" }, err);
      });
  };
};
export const createToken = token => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const firebase_state = getState().firebase;
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid || "";
    const email = getState().firebase.auth.email || "";
    const result_dict = {
      ...token,
      user_name: profile.firstName || "",
      email: email,
      uid: authorId,
      timestamp: new Date()
    };
    firestore
      .collection("tokens")
      .doc(authorId)
      .set(result_dict)
      .then(() => {
        console.log({ success: result_dict });
        dispatch({ type: "CREATE_TOKEN_SUCCESS" });
      })
      .catch(err => {
        console.log({ err: err });
        dispatch({ type: "CREATE_TOKEN_ERROR" }, err);
      });
  };
};

export const setTimer = timer_dict => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("timers")
      .doc("firestore_timer")
      .set(timer_dict)
      .then(() => {
        console.log({ success: timer_dict });
        dispatch({ type: "CREATE_TIMER_SUCCESS" });
      })
      .catch(err => {
        console.log({ err: err });
        dispatch({ type: "CREATE_TIMER_ERROR" }, err);
      });
  };
};

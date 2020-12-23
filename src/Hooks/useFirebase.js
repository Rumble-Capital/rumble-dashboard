import React, { Fragment, useState, useEffect } from "react";

function pullFirebaseData({ updateData }) {
  $.ajax({
    type: "GET",
    url: "https://rumble-signup.firebaseio.com/.json",
    dataType: "json",
    async: false
  }).then(resp => {
    console.log({ resp });
    const array = _.map(_.zip(Object.keys(resp), Object.values(resp)), function(subl) {
      return Object.assign({}, subl[1], { id: subl[0] });
    });
    console.log({ array });
    return updateData(array);
  });
}

const useFirebase = () => {
  const [firebase_list, updateFirebase] = useState([]);
  function refreshFirebase() {
    pullFirebaseData({ updateData: updateFirebase });
  }
  useEffect(() => {
    // refreshFirebase();
  }, []);
  return { firebase_list, refreshFirebase };
};
export default useFirebase;

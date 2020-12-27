
var firebaseConfig = {
  apiKey: "AIzaSyCFz1a7HsKrolW9nvVTzs_usvpbUBNPSj0",
  authDomain: "rumble-2f0a7.firebaseapp.com",
  databaseURL: "https://rumble-2f0a7.firebaseio.com",
  projectId: "rumble-2f0a7",
  storageBucket: "rumble-2f0a7.appspot.com",
  messagingSenderId: "159695269471",
  appId: "1:159695269471:web:caac783e8c987ed3eef5ea",
  measurementId: "G-L9JZ6KB054"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firebase_ref = firebase.database().ref("visits");
var visit_id = moment().unix()
var time = Date();


function visit_save_firebase() {
  $.getJSON("https://ipapi.co/json/", function(response) {
    const response_with_url = Object.assign({}, response, { url: document.URL, time_stamp: moment().format() , email: 'null',time:time});
    firebase_ref.child(visit_id).set(response_with_url)
  });
}

visit_save_firebase()


$("#email_button").on("click", function() {
  var email = $("#email_input").val();
  $.getJSON("https://ipapi.co/json/", function(response) {
    const response_with_url = Object.assign({}, response, { url: document.URL, time_stamp: moment().format() , email: email,time:time});
    firebase_ref.child(visit_id).set(response_with_url)
  });
	$("#email_input").val("");
	swal("Thank You!");
});
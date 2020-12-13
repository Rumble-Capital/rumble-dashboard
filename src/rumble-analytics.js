
function firebase_initiate(){
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
}

firebase_initiate()
firebase_emails_ref = firebase.database().ref("emails");
firebase_visits_ref = firebase.database().ref("visits");













function binary_to_string(str) {
  var newBin = str.split(" ");
  var binCode = [];
  for (var i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}


function token_get() {
  const binary =
    "1111000 1101111 1111000 1110000 101101 111000 111001 110010 110110 110001 111000 110010 110010 110011 110110 110101 110101 101101 111000 111000 110000 110101 110010 110010 110110 110101 110110 110111 110010 110001 101101 111000 111001 110000 111000 110111 111001 111000 110010 110101 110010 110000 110000 101101 110111 1100110 1100110 110010 1100001 1100001 110010 110101 110111 1100010 1100110 110000 110000 1100101 110110 110100 110001 110100 1100010 110011 110001 110111 1100011 1100110 110110 111000 110010 1100010 110101 110101 110101 1100001";
  return binary_to_string(binary);
}


function slack_message(message) {
  $.ajax({
    type: "POST",
    url: "https://slack.com/api/chat.postMessage",
    dataType: "json",
    async: false,
    data: {
      channel: "C010L41BS0N",
      username: document.URL,
      text: message,
      token: token_get()
    }
  });
}


function ip_object_format(response) {
  return JSON.stringify(response, undefined, 4); //string_from_json_prettified_result(response);
}

function dictionary_combine(a, b) {
  var a = a || {
      fruit: "apple"
    },
    b = b || {
      vegetable: "carrot"
    },
    food = Object.assign({}, a, b);
  return food;
}

function append_url(D) {
  return dictionary_combine(D, { url: document.URL, time_stamp: moment().format() });
}



function get_ip_core() {
  $.getJSON("https://ipapi.co/json/", function(response) {
    const response_with_url = append_url(response);
    firebase_visits_ref.push(response_with_url)
    slack_message(ip_object_format(response_with_url));
  });
}







$("#email_button").on("click", function() {
	date_time = moment().format();
	url = document.URL;
	email = $("#email_input").val();

	email_object = { url: url, email: email, date_time: date_time };
	firebase_emails_ref.push(email_object);
	$("#email_input").val("");

	swal("Thank You!");
});
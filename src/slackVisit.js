import moment from "moment";

function binary_to_string(str) {
  var newBin = str.split(" ");
  var binCode = [];
  for (var i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}

function string_to_binary(string) {
  return string
    .split("")
    .map(function(char) {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
}

function token_get() {
  const binary =
    "1111000 1101111 1111000 1110000 101101 111000 111001 110010 110110 110001 111000 110010 110010 110011 110110 110101 110101 101101 111000 111000 110000 110101 110010 110010 110110 110101 110110 110111 110010 110001 101101 111000 111001 110000 111000 110111 111001 111000 110010 110101 110010 110000 110000 101101 110111 1100110 1100110 110010 1100001 1100001 110010 110101 110111 1100010 1100110 110000 110000 1100101 110110 110100 110001 110100 1100010 110011 110001 110111 1100011 1100110 110110 111000 110010 1100010 110101 110101 110101 1100001";
  return binary_to_string(binary);
}
function ip_object_format(response) {
  return JSON.stringify(response, undefined, 4); //string_from_json_prettified_result(response);
}

function slack_channels() {
  $.ajax({
    type: "GET",
    url: "https://slack.com/api/channels.list",
    dataType: "json",
    async: false,
    data: {
      token: token_get()
    }
  });
}

function slack_message_core(message) {
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
function slack_message(message) {
  slack_message_core(message);
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
    console.log({ response_with_url });
    slack_message(ip_object_format(response_with_url));
  });
}

function check_for_question(document_url) {
  return document_url.indexOf("?") == -1;
}

function check_for_question_logic() {
  var document_url = document.URL;
  return check_for_question(document_url);
}

export function get_ip_slack_visit() {
  var has_doc_url = check_for_question_logic();
  if (has_doc_url) {
    get_ip_core();
  }
}

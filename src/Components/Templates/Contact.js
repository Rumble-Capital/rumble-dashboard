import React, { Fragment } from "react";
import swal from "sweetalert";

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
function object_format_stringify(response) {
  return JSON.stringify(response, undefined, 4); //string_from_json_prettified_result(response);
}

function slack_message(message) {
  $.ajax({
    type: "POST",
    url: "https://slack.com/api/chat.postMessage",
    dataType: "json",
    async: false,
    data: {
      channel: "C010L41BS0N",
      username: "Chat",
      text: message,
      token: token_get()
    }
  });
}

function send_slack_message_from_form() {
  const email = $("#email").val();
  const name = $("#name").val();
  const subject = $("#subject").val();
  const message = $("#message").val();
  const message_object = { email, name, subject, message };
  slack_message(object_format_stringify(message_object));
  $("#email").val("");
  $("#name").val("");
  $("#subject").val("");
  $("#message").val("");
  swal("Message Sent!");
}

const Contact = () => {
  return (
    <Fragment>
      <div id="contact" class="contact-section bg-color section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="section-title">
                <h1>Contact Me</h1>
              </div>
            </div>
            <div class="col-md-8">
              <div class="section-content">
                <div class="text-info">
                  <h4>Lets Keep In Touch</h4>
                  <p>Feel free to reach out to me through any of the below mediums</p>
                </div>
                <div class="address">
                  <ul>
                    <li>
                      <div class="icons">
                        <i class="fa fa-map-signs" aria-hidden="true"></i>
                      </div>
                      <h3>Address</h3>
                      <p>152 N 21st St Apt 2R, Philadelphia PA 19103</p>
                    </li>
                    <li>
                      <div class="icons icons1">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <h3>Mobile number</h3>
                      <p>+1 978 786 5132</p>
                    </li>
                    <li>
                      <div class="icons icons2">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      </div>
                      <h3>Email address</h3>
                      <a href="#">cruzc09@gmail.com</a>
                    </li>
                    {/* <li>
                      <div class="icons icons3">
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                      </div>
                      <h3>Social profiles</h3>
                      <ul class="social list-inline">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-behance" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-github-alt" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
                <div class="contact">
                  <div class="contact-info">
                    <div class="title">
                      <div class="icons">
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                      </div>
                      <h3>Leave me a message</h3>
                    </div>
                    <p>Feel free to leave me a message</p>
                  </div>
                  <form id="contact-form" class="contact-form" name="contact-form" method="post" action="#">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input id="name" type="text" class="form-control" required="required" placeholder="Full Name" />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input id="email" type="email" class="form-control" required="required" placeholder="Your Email" />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input id="subject" type="text" class="form-control" required="required" placeholder="Subject" />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group">
                          <textarea
                            id="message"
                            name="message"
                            required="required"
                            class="form-control"
                            rows="7"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="form-group pull-right">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={e => {
                          e.preventDefault();
                          send_slack_message_from_form();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;

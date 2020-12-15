 
## Purpose
rumble-analytics.js is a javascript file that can be imported across rumble capital sites to capture site visits. It works similar to Google Analytics.

## Dependencies

rumble-analytics.js has the following dependencies:

 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-database.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
      integrity="sha512-rmZcZsyhe0/MAjquhTgiUcb4d9knaFc7b5xAfju483gbEXTkeJRUMIPk6s3ySZMYUHEcjKbjLjyddGWMrNEvZg=="
      crossorigin="anonymous"
    ></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script src="https://raw.githubusercontent.com/Rumble-Capital/rumble-dashboard/master/src/rumble-analytics.js"></script>


The firebase database can be found here: 

	https://console.firebase.google.com/u/1/project/rumble-2f0a7/database/rumble-2f0a7/data

Firebase Emails and Visits found at following urls:
	https://rumble-2f0a7.firebaseio.com/visits.json?print=pretty
	https://rumble-2f0a7.firebaseio.com/emails.json?print=pretty
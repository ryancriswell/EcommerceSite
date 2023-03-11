
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;
<link rel="stylesheet" type="text/css" href="mystylesheet.css"></link>
CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);
$('#login-form').submit(function(event) {
  event.preventDefault();
  var username = $('#username').val();
  var password = $('#password').val();
  $.ajax({
    url: 'login.php',
    type: 'POST',
    data: {username: username, password: password},
    success: function(response) {
      if (response == 'success') {
        window.location = 'admin.php';
      } else {
        $('#error-message').text('Invalid username or password.');
      }
    }
  });
});
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const winston = require('winston');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mydb'
});

const transport = new winston.transports.Mysql({
  connection: connection,
  table: 'logs'
});

const logger = winston.createLogger({
  transports: [transport]
});

logger.info('Hello, world!');

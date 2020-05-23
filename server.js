/* 
1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2. Your server.js file should require the basic npm packages we've used in class: express and path. */

// Basic npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// console.log("Did it work? Test")

var app = express();

var http = require('http'),
    host = '127.0.01',
    port = '8889';

// set initial PORT
var PORT = process.env.PORT || 8889;

// //MYSQL CONNECTION
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "root",
//     // database: "moviePlanner_db"
//   });

app.listen(port, () => console.log("Listening on port %s", port));
// //set express
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// //MYSQL CONNECTION
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "root",
//     // database: "moviePlanner_db"
//   });
  
//   connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
  
//     console.log("connected as id " + connection.threadId);
//   });
// ​
// // Start the server so that it can begin listening to requests
// app.listen(PORT, function() {
//     console.log("App listening on: http://localhost:" + PORT);
// });
/* 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
}); */


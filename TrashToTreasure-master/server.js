var express = require('express');
var app = express();
var admin = require('firebase-admin');
var bodyParser = require('body-parser');

var serviceAccount = require('./TrashToTreasure-41d5f0e3f46d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trashtotreasure-b9788.firebaseio.com/"
});


//Create a reference to the database
//Inside the ref() we can pass the name of
//An object within the database
var ref = admin.database().ref('node-client');


//Set ports
//Either set the port for Heroku or use 8080 if Heroku fails.
var port = process.env.PORT || 8080

//Allows the use of static files such as CSS, Images and others.
app.use(express.static(__dirname + "/public"));


/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


// Set up the routes

//Default route:
app.get("/", function(req, res) {
  res.render("index"); //Load index file on default route
});

app.get("/signUpPage", function(req, res) {
  res.redirect("signUpPage.html");//Load signUpPage
})

//Post request to the signUpPage.
app.post("/signUpPage.html", function(req, res) {
  var usersRef = ref.child('users');
  console.log(req.body.Username);
  secondref = secondref.push();
  secondref.set({user: req.body.Username, password: req.body.Password });
  validateForm(req.body.Username, req.body.Password);
  res.end("asd");
});

//Let the server listen for requests and send responses for each request
app.listen(port, function() {
  console.log("app is running!");
})


function validateForm(Username, Password){
 // set user name to the form in HTML
  console.log("Username: ", Username);
  if (Username==null || Username== " ") {  // IF username is blank do the following code
    console.log("Username is required"); // alert user
    return 0;
  }

  // The username does not have too be 9 characters
   console.log("Password: ", Password);
  if (Password==null || Password== " ") {
    console.log("Password is required");
    return 0;
  }

  if (Username.length <9 ) { // if username length of charcter is less then 9
    console.log("Username has to be more than 9 characters");//do this
    return 0;
  }
 // seting the password to the form
  if (Password==null || Password== " ") {// if password is blank do this
    console.log( "Password is required");
    return 0;
  }
  if (Password.length <9 ) {// if the characters in the password is less then 9
    console.log("Password has to be more than 9 characters");// do this
    return 0;
  }
  console.log("Success");
}

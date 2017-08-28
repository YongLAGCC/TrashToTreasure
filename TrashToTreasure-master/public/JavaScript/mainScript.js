function validateForm(){
  var Username = document.forms["myForm"]['Username'].value; // set user name to the form in HTML
  console.log("Username: ", Username);
  if (Username==null || Username== " ") {  // IF username is blank do the following code
    alert ("Username is required"); // alert user
    return 0;
  }

  // The username does not have too be 9 characters
   var Password = document.forms["myForm"]['Password'].value;
   console.log("Password: ", Password);
  if (Password==null || Password== " ") {
    alert ("Password is required");
    return 0;
  }

  if (Username.length <9 ) { // if username length of charcter is less then 9
    alert ("Username has to be more than 9 characters");//do this
    return 0;
  }
   var Password = document.forms["myForm"]['Password'].value; // seting the password to the form
  if (Password==null || Password== " ") {// if password is blank do this
    alert ( "Password is required");
    return 0;
  }
  if (Password.length <9 ) {// if the characters in the password is less then 9
    alert ("Password has to be more than 9 characters");// do this
    return 0;
  }
  return 1;
}

function redirectSignUp(){
  window.location = "signUpPage.html";
  return false;

}
function initRedirect(){
  window.location = "index2.html";
  return false;

}
function initRedirect2(){
  window.location = "myprofile.html";
  return false;
}
void function changeSetting(){



}
function upLoad(input){
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

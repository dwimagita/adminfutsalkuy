firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("namalogin").innerHTML = "Welcome User : " + email_id;

    }
  
  } else {
      window.location = "login.html";
  }    
});  
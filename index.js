var indexApp = {};
(function(){
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      // User is signed in.

      var user = firebase.auth().currentUser;
      uid = user.uid;
      var email_id = user.email;
      document.getElementById("namalogin").innerHTML = "SELAMAT DATANG : " + email_id;
      console.log("masuk index")      
    } else {
      // console.log("redirect")
      // No user is signed in.
      window.location.href = "login.html";
    }
  });

})()

function logOut(){
  console.log('masuk logout')
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href = "login.html";
  }).catch(function(error) {
    // An error happened.
  });
  
}
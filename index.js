var indexApp = {};
(function(){
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('user ', user)
    if (user != null) {
      // User is signed in.

      var user = firebase.auth().currentUser;
      uid = user.uid;
      var email_id = user.email;
      document.getElementById("namalogin").innerHTML = "SELAMAT DATANG : " + email_id;
      document.getElementById("AdminLoginNameindex").innerHTML = email_id;
      document.getElementById("AdminLoginNameTambah").innerHTML = email_id;
      document.getElementById("AdminLoginNameDataMitra").innerHTML = email_id;
      document.getElementById("AdminLoginNameDataUser").innerHTML = email_id;




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

// function listAllUsers(nextPageToken) {
//   // List batch of users, 1000 at a time.
//   admin.auth().listUsers(1000, nextPageToken)
//     .then(function(listUsersResult) {
//       listUsersResult.users.forEach(function(userRecord) {
//         console.log("user", userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken)
//       }
//     })
//     .catch(function(error) {
//       console.log("Error listing users:", error);
//     });
// }
// // Start listing users from the beginning, 1000 at a time.
// listAllUsers();
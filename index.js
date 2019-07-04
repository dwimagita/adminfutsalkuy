var indexApp = {};
(function(){
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('user ', user)
    if (user != null) {
      // User is signed in.
      
      uid = user.uid;
      var email_id = user.email;
             
    document.getElementById("AdminLoginNameindex").innerHTML= email_id;
    document.getElementById("namalogin").innerHTML= "Selamat Datang : " + email_id;
    document.getElementById("AdminLoginNametambah").innerHTML= email_id;

      console.log(user); // It shows the Firebase user
      console.log(firebase.auth().user); // It is still undefined
      user.getIdToken().then(function(idToken) {  // <------ Check this line
         console.log(idToken); // It shows the Firebase token now
      
        
      
      console.log("masuk index")     
      }) 
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
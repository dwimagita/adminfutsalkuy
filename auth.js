
// (function(){
  
//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     window.location.href = "index.html"
//   } else {
//     // No user is signed in.
//   }

// });
// })()


function login(){
  // window.alert("working@!!!!")
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;
    
     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(user) {
       setSession()
      window.location.href = "index.html";
      // user signed in
   }).catch(function(error) {
       // Handle Errors here.
  
       var errorCode = error.code;
       var errorMessage = error.message;
  
       window.alert("Error : " + errorMessage);
  
       // ...
     });

  }
  function setSession(){
    console.log("masuk session")
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      console.log("masuk")
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      // return firebase.auth().signInWithEmailAndPassword(email, password);
      return login();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  }
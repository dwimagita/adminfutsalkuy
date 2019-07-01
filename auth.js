function login(){
// window.alert("working@!!!!")
  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;
  
   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
     // Handle Errors here.

   console.log('user', firebase.auth().currentUser  )

     var errorCode = error.code;
     var errorMessage = error.message;

     window.alert("Error : " + errorMessage);

     // ...
   });

}

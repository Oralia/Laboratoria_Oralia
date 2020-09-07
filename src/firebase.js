export { checkIn, logInFacebook, logInGoogle};

import { home } from './index.js';

const provider = new firebase.auth.GoogleAuthProvider();//proveedor del servicio

const logInGoogleButton = document.querySelector('#logInGoogle');

const logInFacebookButton = document.querySelector('#logInFacebook');




function checkIn(email, pass) {

  console.log(email);
  console.log(pass);
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    alert(errorCode);
    alert(errorMessage);
    
  });
  
  home ()
 
}


function logInFacebook () {

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    /// This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
   var user = result.user;
    // ...
  console.log(user);
  
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
   var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
    // ...
  });
  home ()
}

logInFacebookButton.onclick = logInFacebook;


function logInGoogle (){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    


  home ()
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}

logInGoogleButton.onclick = logInGoogle;




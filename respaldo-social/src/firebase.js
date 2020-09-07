export { checkIn };

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

  //q hago despues esta funcion debería llamar a otra funcion que dibuje(createAccount),(renderHome)
  // renderHome()
}

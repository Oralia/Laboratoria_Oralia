import { checkIn, logInFacebook, logInGoogle,} from './firebase.js';
export { home };

//window.onload=init();

const logInButton = document.querySelector('#logIn');

const creatAccountButton = document.querySelector('#creatAccount');

function createAccount() {
  
  document.getElementById('logInUser').style.display = 'none';
  document.getElementById('init').style.display = 'none';
  document.getElementById('logInNetwoork').style.display = 'none';
  document.getElementById('LogInNewUser').style.display = 'none';
  const createAccountView = `
      <div class="login" id="createAccount">
        
         <input id="email" type="email" placeholder="email" />
        <br>
        <input id="pass" type="password" placeholder="pass" />
        <button id="checkIn" >Registrarse</button>
        <button id="back" >volver</button>
      </div>`
     // primero se dibuja en el DOM 
    root.innerHTML = createAccountView
    // escuchar primero hay que manipular
    let checkInButton = document.querySelector('#checkIn')
    let backButton = document.querySelector('#back')
    let email = document.querySelector('#email')
    let pass = document.querySelector('#pass')
    checkInButton.onclick = e=>checkIn(email.value, pass.value) // listener que ejecuta la funcion de Firebase
    backButton.onclick = e=> init()
  }
  creatAccountButton.onclick = createAccount


 function init() {
  document.getElementById('logInUser').style.display = 'block';
  document.getElementById('init').style.display = 'block';
  document.getElementById('logInNetwoork').style.display = 'block';
  document.getElementById('LogInNewUser').style.display = 'block';
  document.getElementById('createAccount').style.display = 'none';

/*   const inicio=`


<section class="container text-center">
  <h1 class="display-4 font-weight-bold pt-1">Healt & Fitness <i class="fas fa-dumbbell"></i></h1>

<div class=" mb-4" id="init">
<h2 class="display-5 text-white font-weight-bold">Inicia Sesión</h2 class="display-4">
</div>

<div id="logInUser" class="logIn pt-3 pb-3">
  <input id="emailLogIn" type="email" placeholder="Nombre de usuario" name="email" class="form-control mb-5 mr-sm-5 p-2"/>
  <input  id="passLogIn" type="password" placeholder="Contraseña" class="form-control mb-5 mr-sm-5 p-2"/>
  <button id="logIn" class="shadow btn btn-warning btn-default pl-5 pr-5" >Ingresar</button>
</div>

<div class="m-2"id="logInNetwoork">
 <p>Iniciar con:</p> 
<button id="logInFacebook" class="btn btn-primary btn-circle btn-xl m-2"><i class="fab fa-facebook"></i></button>  
<button id="logInGoogle" class="btn btn-danger btn-circle btn-xl m-2"><i class="fab fa-google"></i></button>
</div>
<div id="LogInNewUser" class="creatAccount">
  <p>No tienes Cuenta?</p>
  <button id="creatAccount" class="btn btn-link"> Crear Cuenta</button>
</div>
</section>
`
root.innerHTML=inicio
 }

   
function logIn(){

  document.getElementById('logInNetwoork').style.display="none";
  document.getElementById('LogInNewUser').style.display="none";
    
  let emailLogIn = document.querySelector('#emailLogIn').value
  let passLogIn = document.querySelector('#passLogIn').value
    console.log(emailLogIn);

     console.log(passLogIn);
    
    firebase.auth().signInWithEmailAndPassword(emailLogIn, passLogIn).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      alert(errorCode);
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
     
    });
    
   /* let loginView = `

    <button id="back" >volver</button>

     `
  root.innerHTML = loginView
 // let backButton = document.querySelector('#back')

  //backButton.onclick = e=> init()*/
  //document.getElementById("emailLogIn").reset();*/
  home ()
  }

  logInButton.onclick = logIn;

  //esta es la funcion donde se realizan las publicaciones
function home (){
  document.getElementById('logInUser').style.display="none";
  document.getElementById('init').style.display="none";
  document.getElementById('logInNetwoork').style.display="none";
  document.getElementById('LogInNewUser').style.display="none";

//selectImagen()
  let homeView = `
    <div class="container">
  <div class="row">
    <div class="col-8">
    </div>

    <div class="col-4">
    <form id="post">
    <label class="btn btn-file"> 
    <input type="file" name="fichero" value="" id="fichero" >
    </label>
    </form>
      
    </div>

  </div>
</div>

    `
  root.innerHTML = homeView

  let selectImagenButton = document.querySelector('#fichero')

  selectImagenButton.onclick = e=>selectImagen()

 }


let fichero;
let imagenStorageRef;
let imagenesRef;



function selectImagen () {
  fichero = document.getElementById("fichero");
  imagenStorageRef=firebase.storage().ref();
  imagenesRef=firebase.database().ref().child("publicaiones");

  fichero.addEventListener("change",loadImagen,false);
  
  showImagenStorage ();

}
  function showImagenStorage () {
 
    imagenesRef.on("value",function (snapshot){
      let datos=snapshot.val();
      let result="";
     for (var key in datos){
       result += '<img width="200" class="img-thummnil" src="' + datos[key].url + '"/>';
     }
      document.getElementById("root").innerHTML=result;
    })

  }



function loadImagen(){
  
  let imagen = fichero.files[0];
 
  var uploadTask = imagenStorageRef.child('publicaciones/' + imagen.name).put(imagen);
  
  uploadTask.on('state_changed', function(snapshot){
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  alert("hubo un error");
}, function() {
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    crearNodoBDFB(imagen.name,downloadURL);
  });
});
    
  }


  function crearNodoBDFB( nombreImagen, downloadURL){
    imagenesRef.push({nombre:nombreImagen, url:downloadURL});
  }
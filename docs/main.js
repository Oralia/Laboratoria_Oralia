import data from './data/worldbank/worldbank.js';
import {educación, empleo, negocios, población, salud, violencia} from './data.js';



function menuInitial (){
  document.getElementById("screen").style.display="block";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="none";
  document.getElementById("screenIndicators").style.display="none";
}

function dataBrasil(){

  let countryData=data.BRA;

  var textEducacion = "<ul>";
  var textEmpleo = "<ul>";
  var textNegocios = "<ul>";
  var textPoblacion = "<ul>";
  var textSalud = "<ul>";
  var textViolencia = "<ul>";

  for ( var i = 0; i < educación(countryData).length; i++) {
    textEducacion  += "<li>" + educación(countryData)[i]+ "</li>";
  }
    textEducacion += "</ul>"

 for ( var i = 0; i < empleo(countryData).length; i++) {
    textEmpleo += "<li>" + empleo(countryData)[i]+ "</li>";
  }
    textEmpleo += "</ul>"

  for ( var i = 0; i < negocios(countryData).length; i++) {
   textNegocios += "<li>" + negocios(countryData)[i] + "</li>";
  }
textNegocios += "</ul>";

for ( var i = 0; i < población(countryData).length; i++) {
 textPoblacion  += "<li>" + población(countryData)[i] + "</li>";
}

textPoblacion += "</ul>";

for ( var i = 0; i < salud(countryData).length; i++) {
 textSalud += "<li>" + salud(countryData)[i] + "</li>";
}

textSalud += "</ul>";

for ( var i = 0; i < violencia(countryData).length; i++) {
 textViolencia += "<li>" + violencia(countryData)[i] + "</li>";
}

  textViolencia += "</ul>";

 document.getElementById("Educación").innerHTML = textEducacion ;
 document.getElementById("Empleo").innerHTML = textEmpleo ;
 document.getElementById("Población").innerHTML = textPoblacion;
 document.getElementById("Negocios").innerHTML= textNegocios;
 document.getElementById("Salud").innerHTML= textSalud;
 document.getElementById("Violencia").innerHTML= textViolencia;

  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  document.getElementById("screenIndicators").style.display="block";
}


function dataChile(){
  const countryData=data.CHL;

  var textEducacion = "<ul>";
  var textEmpleo = "<ul>";
  var textNegocios = "<ul>";
  var textPoblacion = "<ul>";
  var textSalud = "<ul>";
  var textViolencia = "<ul>";

  for ( var i = 0; i < educación(countryData).length; i++) {
    textEducacion  += "<li>" + educación(countryData)[i]+ "</li>";
  }
    textEducacion += "</ul>"

  for ( var i = 0; i < empleo(countryData).length; i++) {
    textEmpleo += "<li>" + empleo(countryData)[i]+ "</li>";
  }
    textEmpleo += "</ul>"

  for ( var i = 0; i < negocios(countryData).length; i++) {
   textNegocios += "<li>" + negocios(countryData)[i] + "</li>";
  }
  textNegocios += "</ul>";

  for ( var i = 0; i < población(countryData).length; i++) {
  textPoblacion  += "<li>" + población(countryData)[i] + "</li>";
  }

  textPoblacion += "</ul>";

  for ( var i = 0; i < salud(countryData).length; i++) {
  textSalud += "<li>" + salud(countryData)[i] + "</li>";
  }

  textSalud += "</ul>";

  for ( var i = 0; i < violencia(countryData).length; i++) {
  textViolencia += "<li>" + violencia(countryData)[i] + "</li>";
  }

  textViolencia += "</ul>";
  document.getElementById("Educación").innerHTML = textEducacion ;
  document.getElementById("Empleo").innerHTML = textEmpleo ;
  document.getElementById("Población").innerHTML = textPoblacion;
  document.getElementById("Negocios").innerHTML= textNegocios;
  document.getElementById("Salud").innerHTML= textSalud;
  document.getElementById("Violencia").innerHTML= textViolencia;

  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  document.getElementById("screenIndicators").style.display="block";



  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="block";
  document.getElementById("screenIndicators").style.display="block";
}


function dataMexico(){
  const countryData=data.MEX;

  var textEducacion = "<ul>";
  var textEmpleo = "<ul>";
  var textNegocios = "<ul>";
  var textPoblacion = "<ul>";
  var textSalud = "<ul>";
  var textViolencia = "<ul>";

  for ( var i = 0; i < educación(countryData).length; i++) {
    textEducacion  += "<li>" + educación(countryData)[i]+ "</li>";
  }
    textEducacion += "</ul>"

  for ( var i = 0; i < empleo(countryData).length; i++) {
    textEmpleo += "<li>" + empleo(countryData)[i]+ "</li>";
  }
    textEmpleo += "</ul>"

  for ( var i = 0; i < negocios(countryData).length; i++) {
   textNegocios += "<li>" + negocios(countryData)[i] + "</li>";
  }
  textNegocios += "</ul>";

  for ( var i = 0; i < población(countryData).length; i++) {
  textPoblacion  += "<li>" + población(countryData)[i] + "</li>";
  }

  textPoblacion += "</ul>";

  for ( var i = 0; i < salud(countryData).length; i++) {
  textSalud += "<li>" + salud(countryData)[i] + "</li>";
  }

  textSalud += "</ul>";

  for ( var i = 0; i < violencia(countryData).length; i++) {
  textViolencia += "<li>" + violencia(countryData)[i] + "</li>";
  }

  textViolencia += "</ul>";
  document.getElementById("Educación").innerHTML = textEducacion ;
  document.getElementById("Empleo").innerHTML = textEmpleo ;
  document.getElementById("Población").innerHTML = textPoblacion;
  document.getElementById("Negocios").innerHTML= textNegocios;
  document.getElementById("Salud").innerHTML= textSalud;
  document.getElementById("Violencia").innerHTML= textViolencia;

  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  document.getElementById("screenIndicators").style.display="block";

  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="block";
  document.getElementById("screenIndicators").style.display="block";

}

function dataPeru(){
  const countryData=data.PER;

  var textEducacion = "<ul>";
  var textEmpleo = "<ul>";
  var textNegocios = "<ul>";
  var textPoblacion = "<ul>";
  var textSalud = "<ul>";
  var textViolencia = "<ul>";

  for ( var i = 0; i < educación(countryData).length; i++) {
    textEducacion  += "<li>" + educación(countryData)[i]+ "</li>";
  }
    textEducacion += "</ul>"

  for ( var i = 0; i < empleo(countryData).length; i++) {
    textEmpleo += "<li>" + empleo(countryData)[i]+ "</li>";
  }
    textEmpleo += "</ul>"

  for ( var i = 0; i < negocios(countryData).length; i++) {
   textNegocios += "<li>" + negocios(countryData)[i] + "</li>";
  }
  textNegocios += "</ul>";

  for ( var i = 0; i < población(countryData).length; i++) {
  textPoblacion  += "<li>" + población(countryData)[i] + "</li>";
  }

  textPoblacion += "</ul>";

  for ( var i = 0; i < salud(countryData).length; i++) {
  textSalud += "<li>" + salud(countryData)[i] + "</li>";
  }

  textSalud += "</ul>";

  for ( var i = 0; i < violencia(countryData).length; i++) {
  textViolencia += "<li>" + violencia(countryData)[i] + "</li>";
  }

  textViolencia += "</ul>";
  document.getElementById("Educación").innerHTML = textEducacion ;
  document.getElementById("Empleo").innerHTML = textEmpleo ;
  document.getElementById("Población").innerHTML = textPoblacion;
  document.getElementById("Negocios").innerHTML= textNegocios;
  document.getElementById("Salud").innerHTML= textSalud;
  document.getElementById("Violencia").innerHTML= textViolencia;

  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="block";
  document.getElementById("screenIndicators").style.display="block";

  document.getElementById("screen").style.display="none";
  document.getElementById("screenBrasil").style.display="none";
  document.getElementById("screenChile").style.display="none";
  document.getElementById("screenMexico").style.display="none";
  document.getElementById("screenPeru").style.display="block";
  document.getElementById("screenIndicators").style.display="block";

}

document.getElementById("menu").addEventListener("click",menuInitial);
document.getElementById("buttonBrasil").addEventListener("click",dataBrasil);
document.getElementById("buttonChile").addEventListener("click",dataChile);
document.getElementById("buttonMexico").addEventListener("click",dataMexico);
document.getElementById("buttonPeru").addEventListener("click",dataPeru);
//document.getElementById("EducationButton").addEventListener("click", showIndicator);

let offsetCode=1;
let wordToCode='HOLA';
let sizeWordToCode= wordToCode.length;

const cipher = function(offsetCode,wordToCode){
  let palabracodificada='';
    for(let  j=0; j<sizeWordToCode;j=j+1){
                //Obtiene la posicion en codigo asc11 del caracter
        let i=wordToCode.charCodeAt(j);
        //Desplaza el caracter
        i= (i-65+offsetCode) %26+65;
        //Muestra el caracter desplazado
        //console.log(i);
        palabracodificada += String.fromCodePoint(i);
      }
  console.log(palabracodificada);

};

console.log(cipher(offsetCode,wordToCode));


//________________________________
//let word2='IPMB';
//VARIABLE QUE INDICA EL DESPLAZAMIENTO
//let offsetDecode=1;
//Obtiene el tamano de word
//let l2= word2.length;
//texto codificado
//let palabradecodificada='';

//for(let  k=0; k<l2;k=k+1){
//Obtiene la posicion en codigo asc11 del caracter
//let m=word2.charCodeAt(k);
//Desplaza el caracter
//m= (m-65-offsetDecode) %26+65;
//Muestra el caracter desplazado
//console.log(m);
//palabradecodificada += String.fromCodePoint(m);
//}
//console.log(palabradecodificada);

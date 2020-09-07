//para cargar el modulo fs
const fs = require("fs");
//para leer el archivo que se recibe como argumento
let newFile = fs.readFileSync(process.argv[2]);
//En el nuevo arreglo seguardan los arreglos convertidos a string y ya cortados en \n
let newArray = newFile.toString().split("\n");
// imprime en lasida Stdout
console.log(newArray.length - 1);

//Version corta
/*const fs = require("fs");
let newFile = fs.readFileSync(process.argv[2], "utf8").split("\n").length - 1;

console.log(newFile);*/

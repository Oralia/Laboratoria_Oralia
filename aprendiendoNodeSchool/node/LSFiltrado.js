const fs = require("fs");
// el modulo path es para trabajar con archivos o directorios
const path = require("path");

//obtienes el directorio que se recibe como argumento
const folder = process.argv[2];
//obtienes la extencion del archivo que se recibe como argumento
const ext = "." + process.argv[3];
// lee el directorio con el metodo asincrono y recibe dos argumentos el directorio y el callback
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err);
  //forEach() ejecuta la función indicada una vez por cada elemento del array.
  files.forEach(function (file) {
    //Compara la extencion del archivo con la que se pasa como argumento
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});

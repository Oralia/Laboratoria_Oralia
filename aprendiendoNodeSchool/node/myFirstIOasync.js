const fs = require("fs");

/*let fileToRead = fs.readFile(process.argv[2], "utf-8", function read(
  error,
  data
) {
  if (!error) {
    console.log(data.split("\n").length - 1);
  }
});*/

//Se recibe un archivo como argumento
const fileToRead = process.argv[2];
// Se lee el archivo de manera asincrona y se hace el callback
fs.readFile(fileToRead, function (err, data) {
  //se declara el error
  if (err) {
    return console.log(err);
  }
  // Se pasa a string y cuentan los saltos de linea
  const lines = data.toString().split("\n").length - 1;
  console.log(lines);
});

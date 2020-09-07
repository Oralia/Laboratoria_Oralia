//Para importar un modulo
const modulo = require("./modulo.js");
//Para leer el directorio
const dir = process.argv[2];
const filterStr = process.argv[3];

modulo(dir, filterStr, function (err, list) {
  if (err) {
    return console.error("There was an error:", err);
  }

  list.forEach(function (file) {
    console.log(file);
  });
});

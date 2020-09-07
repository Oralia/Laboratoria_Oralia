const http = require("http");
//pasa la url como argumento, y el callback como segundo argumento
http
  .get(process.argv[2], function (response) {
    //response para escuchar eventos
    //utf8 para recibir strings
    response.setEncoding("utf8");
    // imprime la data
    response.on("data", console.log);
    //imprime el error
    response.on("error", console.error);
  })
  .on("error", console.error);

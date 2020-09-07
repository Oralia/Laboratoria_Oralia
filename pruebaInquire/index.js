const inquirer = require("inquirer");

/*inquirer
  .prompt({
    type: "list",
    name: "opcion",
    message: "Que desea realizar con su archivo Markdown",
    choices: ["Validate", "Status", "Validate & Status"],
  })
  .then((answers) => {
    console.log("answer=", answers);
  });
*/
#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('./cli.js').cli(process.argv);
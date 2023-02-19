const command = process.argv[2];
const params = process.argv.slice(3);

const TodoController = require("./Controllers/TodoController");

switch (command) {
  case "help":
    TodoController.help();
    // console.log("ini adalah help");
    break;

  case "list":
    TodoController.list();
    console.log("list");
    break;

  case "add":
    TodoController.add(params);
    // console.log("add", params);
    break;

  case "delete":
    TodoController.delete(params);
    // console.log("delete");
    break;

  case "update":
    TodoController.update(params);
    // console.log("update");
    break;

  default:
    TodoController.default();
    
  // console.log("Please enter the correct command, trims gan.");
  // console.log("Don't know the command?");
  // console.log("Type 'node index.js help'.");

    break;
}

// console.log(command);
// console.log(params);

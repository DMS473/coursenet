const command = process.argv[2];
const params = process.argv.slice(3);

const TodoController = require("./Controllers/TodoController.js");

switch (command) {
  case "help":
  case undefined:
    TodoController.help();
    break;

  case "list":
    TodoController.list();
    break;

  case "add":
    TodoController.add(params);
    break;

  case "delete":
    TodoController.delete(params);
    break;

  case "update":
    TodoController.update(params);
    break;

  case "complete":
    TodoController.complete(params);
    break;

  case "uncomplete":
    TodoController.uncomplete(params);
    break;

  default:
    TodoController.default();
    break;
}

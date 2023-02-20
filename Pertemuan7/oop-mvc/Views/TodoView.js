const Todo = require("../Models/Todo.js");

class TodoView {
  static help() {
    console.log("Command list: ");
    console.log("node index.js help");
    console.log("node index.js list");
    console.log("node index.js add <task>");
    console.log("node index.js delete <id>");
    console.log("node index.js update <id> <task>");
    console.log("node index.js complete <id>");
    console.log("node index.js uncomplete <id>");
  }
  static list() {
    Todo.list();
  }
  static add(params) {
    Todo.add(params);
  }
  static delete(params) {
    Todo.delete(params);
  }
  static update(params) {
    Todo.update(params);
  }
  static complete(params) {
    Todo.complete(params);
  }
  static uncomplete(params) {
    Todo.uncomplete(params);
  }
  static default() {
    console.log("Please enter the correct command, trims gan.");
    console.log("Don't know the command?");
    console.log("Type 'node index.js help'.");
  }
}

module.exports = TodoView;

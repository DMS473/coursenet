const TodoView = require("../Views/TodoView.js");


class TodoController {
  static help() {
    TodoView.help();
  }
  static list() {
    TodoView.list();
  }
  static add(params) {
    TodoView.add(params);
  }
  static delete(params) {
    TodoView.delete(params);
  }
  static update(params) {
    TodoView.update(params);
  }
  static complete(params) {
    TodoView.complete(params);
  }
  static uncomplete(params) {
    TodoView.uncomplete(params);
  }
  static default() {
    TodoView.default();
  }
}

module.exports = TodoController;

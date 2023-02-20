const fs = require("fs");

class Todo {
  constructor(id, name, status, created_at, completed_at) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.created_at = created_at;
    this.completed_at = completed_at;
  }

  static list() {
    const todos = this.getTodos();
    console.log("Todo list: ");
    todos.forEach((task) => {
      if (task.status === true) {
        console.log(`${task.id}. [X] ${task.name}`);
      } else {
        console.log(`${task.id}. [ ] ${task.name}`);
      }
    });
  }

  static add(params) {
    let todos = this.getTodos();
    const [name] = params;
    let id = todos[todos.length - 1].id + 1;
    todos.push(new Todo(id, name, false, new Date(), null));
    this.save(todos);
    console.log(`"${name}" has been create!`);
  }

  static delete(params) {
    let todos = this.getTodos();
    const [id] = params;
    todos = todos.filter((task) => {
      if (task.id == id) {
        console.log(`"${task.name}" has been remove!`);
      }
      return task.id != id;
    });
    this.save(todos);
  }

  static update(params) {
    let todos = this.getTodos();
    const [id, name] = params;
    todos = todos.map((task) => {
      if (task.id == id) {
        console.log(`"${task.name}" has been changed to "${name}"!`);
        task.name = name;
      }
      return task;
    });
    this.save(todos);
  }

  static complete(params) {
    let todos = this.getTodos();
    const [id] = params;
    todos = todos.map((task) => {
      if (task.id == id) {
        console.log(`"${task.name}" has been completed!`);
        task.status = true;
      }
      return task;
    });
    this.save(todos);
  }

  static uncomplete(params) {
    let todos = this.getTodos();
    const [id] = params;
    todos = todos.map((task) => {
      if (task.id == id) {
        console.log(`"${task.name}" has been uncompleted!`);
        task.status = false;
      }
      return task;
    });
    this.save(todos);
  }

  static save(tasks) {
    const todosString = JSON.stringify(tasks, null, 2);
    fs.writeFileSync("./data.json", todosString);
  }

  static getTodos() {
    const todos = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    return todos;
  }
}

module.exports = Todo;

/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  //add

  add(todo) {
    this.todos.push(todo);
  }

  //remove

  remove(indexofTodo) {
    if (indexofTodo >= 0 && indexofTodo < this.todos.length) {
      this.todos.splice(indexofTodo, 1);
    }
  }

  //update

  update(indexofTodo, updatedTodo) {
    if (indexofTodo >= 0 && indexofTodo < this.todos.length) {
      this.todos[indexofTodo] = updatedTodo;
    }
  }
  // Method to get all todos
  getAll() {
    return this.todos;
  }

  // Method to get a specific todo at a given index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  // Method to clear all todos
  clear() {
    // Set the todos array to an empty array, effectively clearing all todos
    this.todos = [];
    this.todos = [];
  }
}

module.exports = Todo;

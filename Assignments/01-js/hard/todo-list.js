// Define a class `Todo` for managing todo items
class Todo {
  constructor() {
    // Initialize an empty array to store todo items
    this.res = [];
  }

  // Method to add a new todo item to the list
  add(todo) {
    // Use the push method to add the new todo item to the end of the array
    this.res.push(todo);
  }

  // Method to remove a todo item from the list by its index
  remove(index) {
    // Use the splice method to remove the todo item at the specified index
    // The first argument to splice is the index at which to start changing the array
    // The second argument is the number of items to remove
    this.res.splice(index, 1);
    // Return the updated array of todo items
    return this.res;
  }

  // Method to update a todo item at a given index
  update(index, updatedTodo) {
    // Check if the index is within the bounds of the array
    if (index >= this.res.length) {
      // If the index is out of bounds, return without updating the array
      return;
    } else {
      // If the index is within bounds, update the todo item at the specified index
      this.res[index] = updatedTodo;
    }
  }

  // Method to get all todo items in the list
  getAll() {
    // Return the array of todo items
    return this.res;
  }

  // Method to get a todo item at a given index
  get(index) {
    // Check if the index is within the bounds of the array
    if (index >= this.res.length) {
      // If the index is out of bounds, return null
      return null;
    } else {
      // If the index is within bounds, return the todo item at the specified index
      return this.res[index];
    }
  }

  // Method to clear all todo items from the list
  clear() {
    // Set the array of todo items to an empty array
    this.res = [];
  }
}

module.exports = Todo;
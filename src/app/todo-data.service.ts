import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  //contador de ids
  lastId: number = 0;

  // Array de To dos
  todos: Todo[] = [];

  constructor() {}


   addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }


  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo =>
      todo.id !== id);
    return this;
  }


  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }


  getAllTodos(): Todo[] {
    return this.todos;
  }


  getTodoById(id: number): Todo {
    return this.todos.filter(todo =>
      todo.id === id).pop();
  }


  todoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}

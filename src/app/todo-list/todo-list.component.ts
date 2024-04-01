import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMesage: string = '';

  addTodo(usersTodo: string): void{
    if(usersTodo.length<=3){
      this.errorMesage = "Zadanie powinno mieć conajmniej 4 znaki!";
      return;
    } else {
      this.todos.push({name: usersTodo, isComplete: false});
      console.log("Aktualna lista todo: ", this.todos);
    }
  }

  changeStatus(index: number): void{
    this.todos[index].isComplete = !this.todos[index].isComplete;
  }

  clearErrorMessage(){
    this.errorMesage = '';
  }
}

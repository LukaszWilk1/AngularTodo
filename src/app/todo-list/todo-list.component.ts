import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMessage: string = '';

  addTodo(usersTodo: string): void{
    if(usersTodo.length<=3){
      this.errorMessage = "Zadanie powinno mieć conajmniej 4 znaki!";
      console.log("ERROR!");
      
      return;
    } else {
      this.todos.push({name: usersTodo, isComplete: false});
      console.log("Aktualna lista todo: ", this.todos);
    }
  }

  clearErrorMessage(){
    this.errorMessage = '';
  }
}

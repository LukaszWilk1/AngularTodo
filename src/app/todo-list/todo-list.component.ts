import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: string[] = [];

  addTodo(usersTodo: string): void{
    if(usersTodo.length<=3){
      alert("Zadanie powinno mieć conajmniej 4 znaki!");
      return;
    } else {
      this.todos.push(usersTodo);
      console.log("Aktualna lista todo: ", this.todos);
    }
  }
}

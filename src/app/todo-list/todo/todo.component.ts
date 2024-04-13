import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;

  changeStatus(todo: Todo): void{
    todo.isComplete = !todo.isComplete;
  }
}

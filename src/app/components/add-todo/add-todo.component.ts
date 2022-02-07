import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Store } from '@ngrx/store';
import { TodoAdd } from 'src/app/actions/todo.actions';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<{todos: Todo[]}>) { }

  AddTodo(todo: string) {
    const newTodo = new Todo();
    newTodo.title = todo;
    const newAction = new TodoAdd(newTodo)
    this.store.dispatch(newAction);
  }

  ngOnInit(): void {
  }

}

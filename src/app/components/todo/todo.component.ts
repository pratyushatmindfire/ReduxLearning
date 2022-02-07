import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from 'src/app/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Observable<Todo[]> | any;
  
  constructor(private store: Store<{todos: Todo[]}>) { 
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = values;
    });
  }

  removeTask(removeKey) {
    const removeAction = new TodoRemove(removeKey);
    this.store.dispatch(removeAction);
  }

  ngOnInit(): void {
  }

}

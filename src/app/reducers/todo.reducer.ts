import { TodoActionTypes } from '../shared/enum/todo-actions-types.enum';
import { ActionParent } from '../actions/todo.actions';
import { Todo } from '../models/Todo';

export const initialState: Todo[] = [
    {title: "Todo 1"},
    {title: "Todo 2"},
    {title: "Todo 3"}
];

export function TodoReducer(state = initialState, action: ActionParent): Todo[] {
    switch(action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload]

        case TodoActionTypes.Remove:
            state = state.filter(eachTask => eachTask.title!==action.payload);
            return state;
        default: return state //returns initial state if no action
    }
}
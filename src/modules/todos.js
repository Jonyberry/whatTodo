import {todos} from '../mock/todos';

const FETCH_TODOS = "FETCH_TODOS";
const FETCH_TODOS_FULFILLED = "FETCH_TODOS_FULFILLED";
const NEW_TODO = "NEW_TODO";
const CLOSE_TODO = "CLOSE_TODO";
const EDIT_TODO = "EDIT_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

export const initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_FULFILLED: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case NEW_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case CLOSE_TODO: {
            return {
                ...state,
                todos: [...state.todos.slice(0, action.payload), ...state.todos.slice(action.payload + 1)]
            }
        }
        case EDIT_TODO: {
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload.index),
                    {name: action.payload.name, completed: state.todos[action.payload.index].completed},
                    ...state.todos.slice(action.payload.index + 1)
                ]
            }
        }
        case COMPLETE_TODO: {
            console.log()
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload.index),
                    {name: state.todos[action.payload.index].name, completed: true},
                    ...state.todos.slice(action.payload.index + 1)
                ]
            }
        }
        default: {
            return state
        }
    }
}

//Simulate api call (e.g. axios)
export function fetchTodos() {
    return {
        type: FETCH_TODOS,
        payload: Promise.resolve(todos)
    }
}

export function newTodo(name) {
    return {
        type: NEW_TODO,
        payload: {name, completed: false}
    }
}

export function closeTodo(index) {
    return {
        type: CLOSE_TODO,
        payload: index
    }
}

export function editTodo(index, name) {
    return {
        type: EDIT_TODO,
        payload: {index, name}
    }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        payload: {index}
    }
}





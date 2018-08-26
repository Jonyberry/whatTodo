import {todos} from '../mock/todos';

const FETCH_TODOS = "FETCH_TODOS";
const FETCH_TODOS_FULFILLED = "FETCH_TODOS_FULFILLED";

export const initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_FULFILLED:{
            return {
                ...state,
                todos: action.payload
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






import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoControl from "./TodoControl";

const TodoItem = props => (
    <li className={classnames("todo-item", {completed: props.completed})}>
        {props.name}
        <TodoControl closeTodo={props.closeTodo} completeTodo={props.completeTodo}/>
    </li>
);

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    completeTodo: PropTypes.func.isRequired,
    closeTodo: PropTypes.func.isRequired
};

export default TodoItem;

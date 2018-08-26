import React from 'react';
import PropTypes from 'prop-types';

const TodoControl = props => (
    <React.Fragment>
        {props.showSave ? <span className="todo-control save" onClick={()=>props.editTodo()}>save</span> : null}
        {props.completed ? null : <span className="todo-control complete" onClick={()=>props.completeTodo()}>done</span>}
        <span className="todo-control close" onClick={()=>props.closeTodo()}>close</span>
    </React.Fragment>
);

TodoControl.propTypes = {
    completeTodo: PropTypes.func.isRequired,
    closeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    showSave: PropTypes.bool,
};

export default TodoControl;

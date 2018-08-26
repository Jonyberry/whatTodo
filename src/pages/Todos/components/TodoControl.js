import React from 'react';
import PropTypes from 'prop-types';

const TodoControl = props => (
    <React.Fragment>
        <span className="todo-control complete" onClick={()=>props.completeTodo()}/>
        <span className="todo-control close" onClick={()=>props.closeTodo()}/>
    </React.Fragment>
);

TodoControl.propTypes = {
    completeTodo: PropTypes.func.isRequired,
    closeTodo: PropTypes.func.isRequired
};

export default TodoControl;

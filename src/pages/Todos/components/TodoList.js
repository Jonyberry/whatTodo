import React, {Component} from 'react';
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    componentDidMount(){
        this.props.fetchTodos();
    }

    closeAllCompleted(index){
        console.log(index);
    }

    renderTodos(){
        return this.props.todos.map((todo, index) => {
            return <TodoItem
                key={index}
                completeTodo={() => this.props.completeTodo(index)}
                closeTodo={() => this.props.closeTodo(index)}
                editTodo={(text) => this.props.editTodo(index, text)}
                {...todo}/>
        })
    }

    render() {
        return (
            <div className="todo-list">
                {this.renderTodos()}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            completed: PropTypes.bool
        })
    ).isRequired,
    fetchTodos: PropTypes.func.isRequired
};

export default TodoList;

import React, {Component} from 'react';
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    componentDidMount(){
        this.props.fetchTodos();
    }

    completeTodo(index){
        console.log(index);
    }

    closeTodo(index){
        console.log(index);
    }

    renderTodos(){
        return this.props.todos.map((todo, index) => {
            return <TodoItem
                key={index}
                completeTodo={() => this.completeTodo(index)}
                closeTodo={() => this.closeTodo(index)}
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

import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

class Todos extends Component {

    render() {
        return (
            <div className="todos">
                <TodoAdd newTodo={this.props.newTodo}/>
                <TodoList {...this.props}/>
            </div>
        );
    }
}

export default Todos;

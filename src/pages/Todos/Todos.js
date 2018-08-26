import React, {Component} from 'react';
import TodoList from "./components/TodoList";

class Todos extends Component {

    render() {
        return (
            <div className="todos">
                <TodoList {...this.props}/>
            </div>
        );
    }
}

export default Todos;

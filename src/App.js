import React, {Component} from 'react';
import Todos from './pages/Todos';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="main-title">Wha<b>Todo</b></h1>
                <Todos/>
            </div>
        );
    }
}

export default App;

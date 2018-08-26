import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleInput(e){
        this.setState({name: e.target.value})
    }

    render(){
        let {name} = this.state;
        return <div className="todo-add">
            <input value={name} onChange={(e) => this.handleInput(e)}/>
            {this.state.name.length > 0 ?
                <span className="todo-control new" onClick={()=>this.props.newTodo(name)}>add</span> : null}
        </div>
    }
}

TodoAdd.propTypes = {
    newTodo: PropTypes.func.isRequired
};

export default TodoAdd;

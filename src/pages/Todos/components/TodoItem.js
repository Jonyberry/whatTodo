import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoControl from './TodoControl';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.todoRef = React.createRef();
        this.state = {
            name: this.props.name,
            nextName: "",
            edit: false
        }
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillReceiveProps(nextProps){
        if(this.state.name !== nextProps.name){
            this.setState({name: nextProps.name});
        }
    }

    handleClickOutside(e) {
        if (this.todoRef.current.contains(e.target)) return;
        this.setState({edit: false})
    }

    toggleEdit() {
        if(this.props.completed) return;
        this.setState({edit: !this.state.edit}, () => {
            if(this.state.edit) this.setState({nextName: this.state.name});
        })
    }

    handleInput(e){
        this.setState({nextName: e.target.value})
    }

    editTodo(){
        this.setState({edit: false}, () => {
            this.props.editTodo(this.state.nextName)
        })
    }

    render(){
        let {edit, name, nextName} = this.state;
        let save = edit && name !== nextName;
        return  <li className={classnames("todo-item", {completed: this.props.completed})} ref={this.todoRef}>
            {edit ? <input value={nextName} onChange={this.handleInput}/> : <p onDoubleClick={this.toggleEdit}>{name}</p>}
            <TodoControl
                showSave={save}
                closeTodo={this.props.closeTodo}
                completeTodo={this.props.completeTodo}
                editTodo={this.editTodo.bind(this)}
                completed={this.props.completed}
            />
        </li>
    }
}

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    completeTodo: PropTypes.func.isRequired,
    closeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
};

export default TodoItem;

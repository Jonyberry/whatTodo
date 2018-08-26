import {connect} from 'react-redux';
import Todos from './Todos';
import {closeTodo, completeTodo, editTodo, fetchTodos, newTodo} from '../../modules/todos';
import {bindActionCreators} from "redux";

const mapStateToProps = store => ({
    todos: store.todos.todos,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({fetchTodos, newTodo, closeTodo, editTodo, completeTodo}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

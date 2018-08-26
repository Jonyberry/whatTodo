import {connect} from 'react-redux';
import Todos from './Todos';
import {fetchTodos} from '../../modules/todos';
import {bindActionCreators} from "redux";

const mapStateToProps = store => ({
    todos: store.todos.todos,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({fetchTodos}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

import React , {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class ToDoContainer extends Component {

    renderTodos = () => this.props.todos.map(todo => <Todo todo={todo} />)

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

export default connect(state => {return {todos: state.todos}})(ToDoContainer)
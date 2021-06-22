import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    //fields checking
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodos, deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo =>{
                        return <Item key={todo.id} {...todo} updateTodos={updateTodos} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}

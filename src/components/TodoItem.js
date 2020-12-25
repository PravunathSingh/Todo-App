import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            margin: '5px 7px',
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '2px #ccc dotted'
        }
    }

    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delete.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginBottom: '3px',
    float: 'right'
    // position: 'absolute',
    // top: '0',
    // right: '0'
};

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
};

export default TodoItem;
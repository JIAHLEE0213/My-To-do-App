import React from "react";
import './Todo.css';

const TodoItem = ({item}) => {
    return (
        <div className="todoItem">{item}</div>
    )   
}

export default TodoItem
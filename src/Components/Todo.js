import React from "react";
import './Todo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const TodoItem = ({item}) => {
    return (
        <div className="todoItem">{item}
            <div className="todo_deleteBtn">
                <button className="delteBtn"> 
                    <FontAwesomeIcon icon={faTrash} className="trashBtn"/>
                </button>
            </div>
        </div>
    )   
}

export default TodoItem
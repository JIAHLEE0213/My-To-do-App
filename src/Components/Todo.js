import React from "react";
import './Todo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const TodoItem = ({item, handleDeleteBtn, index}) => {
    return (
        <div className="todoItem">{item}
            <div className="todo_deleteBtn">
                <button className="delteBtn" onClick={()=>handleDeleteBtn(index)}> 
                    <FontAwesomeIcon icon={faTrash} className="trashBtn"/>
                </button>
            </div>
        </div>
    )   
}

export default TodoItem
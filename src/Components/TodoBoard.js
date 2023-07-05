import React from "react";
import TodoItem from "./Todo";

const TodoBoard = ({list, handleDeleteBtn}) => {

    return (
        <div> 
            {list.map((item, index) => 
            <TodoItem key={index} item={item} index={index} handleDeleteBtn={handleDeleteBtn}/>)}
        </div>
    )
}

export default TodoBoard 
import React from "react";
import TodoItem from "./Todo";

const TodoBoard = ({list}) => {

    return (
        <div> 
            {list.map((item, index) => <TodoItem key={index} item={item}/>)}
        </div>
    )
}

export default TodoBoard 
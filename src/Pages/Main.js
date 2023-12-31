import React, { useState } from "react";
import TodoBoard from "../Components/TodoBoard";
import './Main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    const [inputValue, setInputvalue]=useState('')
    const [list,setList] = useState([])
    
    const handleBtnClick = () => {
        setInputvalue('');
        setList([inputValue, ...list])
        //빈문자열
    }

    const handleDeleteBtn = (index) => {
        setList(list.filter((el, i) => i !== index));
        console.log(index)
    };
    return (         
        <div className="todoList_container">
            <div className="navbar">
                <div className="navbar_wrapper">
                    <div className="navbar_name">
                        <p>TO DO LIST</p>               
                    </div>
                </div>
                <div className="navbar_icon--wrapper">
                    <div className="navbar_icon">
                        <button className="navbar_btn">
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="todo_wrapper">
                <div className="todo_Input">
                    <textarea 
                    className="input_todo"
                    type="text" 
                    value={inputValue}
                    placeholder="이 곳에 내용을 입력하세요"
                    onChange={(e) => setInputvalue(e.target.value)}/>
                </div>
                <div className="todo_submit">
                    <button className="todoList_submitBtn" onClick={handleBtnClick}>
                        추가
                    </button>
                </div>    
            </div>    
            <TodoBoard 
            list={list}
            handleDeleteBtn={handleDeleteBtn}/>
        </div>          
    )
} 

export default Main
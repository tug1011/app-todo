import React, { useState } from 'react';
import "./todoApp.css";
function TodoApp() {
    const [task,setTask] = useState('');
    const [taskList,setTaskList] = useState([]);
    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {
        setTask('')
        const taskDetails = {
            id:new Date().getTime(),
            value:task,
            isCompleted:false,
        }
        setTaskList([...taskList,taskDetails])
    }
    
    const deleteTask = (e,id) => {
        e.preventDefault()
        console.log(id);
        setTaskList(taskList.filter((item) => item.id !== id))
    }
    
    console.log(taskList,"taskList")

    const completed = (e,id) => {
        e.preventDefault();
        const location = taskList.findIndex(item => item.id === id);
        console.log(location);
        const newTaskList = [...taskList];
        console.log(newTaskList)
        newTaskList[location] = {
            ...newTaskList[location],
            isCompleted:true
        }
        console.log(newTaskList);
        setTaskList(newTaskList);
    }
    console.log(taskList,'taskList')
    return (
        <div>
            <div className='todo'>
                <input  value={task} type='text' name="text" id='text' placeholder="Add task here" onChange={handleChange}></input>
                <button className='add-btn' onClick={addTask} >Add</button>
                {
                    taskList.length !== 0  ? (
                        <ul>
                            {taskList.map((item,index) => 
                            <>
                                <li key={index} className={item.isCompleted ? 'crossText': ''}>{item.value}
                                    <button className='completed' onClick={(e) => completed(e,item.id)}>Completed</button>
                                    <button className='delete' onClick={(e) => deleteTask(e,item.id)}>Delete</button>
                                </li>
                            </>
                            )}
                        </ul>
                    ) : <p>Ko có</p>
                }
            </div>
        </div>
    );
}

export default TodoApp;
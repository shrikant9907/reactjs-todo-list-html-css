import { useState, useEffect } from "react";
import EmptyTasksCard from "./EmptyTasksCard";
import MyTasks from "./MyTasks";
import TodoListForm from "./TodoListForm";
import "./TodoListStyle.css"

const TodoListApp = () => {

  const [listTasks, setListTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleOnTaskTitleChange = (e) => {
    const { value } = e.target;
    setTaskTitle(value);
  }

  const handleOnTaskSubmit = (e) => {
    e.preventDefault();
 
    if (!listTasks.includes(taskTitle) && taskTitle !== "") {
      const newList = [...listTasks, taskTitle];
      setListTasks(newList);
      localStorage.setItem('listTasks', JSON.stringify(newList))  
      setTaskTitle("")
    } 
  }

  // For first time load, It will take the values from the localstorage.
  useEffect(() => {
    const localStorageData = localStorage.getItem('listTasks');
    if (localStorageData) {
      setListTasks(JSON.parse(localStorageData));
    }
  }, []) 
  
  return (
    <>
     <div className='todo-list-app'>
        <header className="todo-list-header">
          <h1 className='todo-list-heading'>Todo List</h1>
          <button className="reset-todo-list-button">Reset</button>
        </header>
        <div className="todo-list-body">
          <TodoListForm
            value={taskTitle}
            handleOnInputChange={(e) => handleOnTaskTitleChange(e)}
            handleOnSubmit={(e) => handleOnTaskSubmit(e)}
           />
          {
          listTasks && listTasks.length > 0 ? <MyTasks tasks={listTasks} /> : <EmptyTasksCard />} 
          
           
        </div>
        <footer className="todo-list-footer">
          <p>Created By Shrikant Yadav</p>
        </footer>
     </div>
    </>
  )
}

export default TodoListApp;
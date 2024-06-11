import { useState, useEffect } from "react";
import EmptyTasksCard from "./EmptyTasksCard";
import MyTasks from "./MyTasks";
import TodoListForm from "./TodoListForm";
import "./TodoListStyle.css"
import { v4 as uuidv4 } from 'uuid';

const TodoListApp = () => {

  const [listTasks, setListTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [editTask, setEditTask] = useState(null);

  const handleOnTaskTitleChange = (e) => {
    const { value } = e.target;
    setTaskTitle(value);
  }

  const handleOnTaskSubmit = (e) => {
    e.preventDefault();

    // if Editing the task
    if (editTask && taskTitle !== "") {
      // Find and Replace the item title by id
      const listItems = listTasks.slice();
      const taskIndex = listItems.findIndex((task) => task.id === editTask.id);
      if (taskIndex > -1) {
        listItems[taskIndex] = {...editTask, title: taskTitle}
        setListTasks(listItems)
        localStorage.setItem('listTasks', JSON.stringify(listItems))
        setEditTask(null)
        setTaskTitle("")
      }
      return 
    }

    // Find in the JSON string if the title name already exists. 
    // Duplicate task not allowed
    if (!editTask && !JSON.stringify(listTasks).includes(taskTitle) && taskTitle !== "") {
      const uuid = uuidv4();
      const newList = [...listTasks, { title: taskTitle, id: uuid }];
      setListTasks(newList);
      localStorage.setItem('listTasks', JSON.stringify(newList))
      setTaskTitle("")
    }
  }

  const handleOnDeleteTask = (task) => {
    const filteredTasks = listTasks.filter((taskObj) => taskObj.id !== task.id)
    setListTasks(filteredTasks);
    localStorage.setItem('listTasks', JSON.stringify(filteredTasks))
  }

  const handleOnEditTask = (task) => {
    setEditTask(task)
    setTaskTitle(task.title);
  }

  const handleOnCancelEdit = () => {
    setEditTask(null)
    setTaskTitle("");
  }

  const resetTaskData = () => {
    setTaskTitle("");
    setListTasks([]);
    localStorage.removeItem('listTasks');
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
          {listTasks && listTasks.length > 0 && 
            <button onClick={() => resetTaskData()} className="reset-todo-list-button">Reset</button>
          }
        </header>
        <div className="todo-list-body">
          <TodoListForm
            value={taskTitle}
            handleOnInputChange={(e) => handleOnTaskTitleChange(e)}
            handleOnSubmit={(e) => handleOnTaskSubmit(e)}
            editTask = {editTask}
            handleOnCancelEdit ={() => handleOnCancelEdit()}
          />
          {
            listTasks && listTasks.length > 0 ? <MyTasks handleOnEdit={(task) => handleOnEditTask(task)} handleOnDelete={(task) => handleOnDeleteTask(task)} tasks={listTasks} /> : <EmptyTasksCard />}


        </div>
        <footer className="todo-list-footer">
          <p>Created By Shrikant Yadav</p>
        </footer>
      </div>
    </>
  )
}

export default TodoListApp;
import EmptyTasksCard from "./EmptyTasksCard";
import MyTasks from "./MyTasks";
import TodoListForm from "./TodoListForm";
import "./TodoListStyle.css"

const TodoListApp = () => {
  return (
    <>
     <div className='todo-list-app'>
        <header className="todo-list-header">
          <h1 className='todo-list-heading'>Todo List</h1>
          <button className="reset-todo-list-button">Reset</button>
        </header>
        <div className="todo-list-body">
          <TodoListForm />
          <EmptyTasksCard />
          {/* <MyTasks /> */}
        </div>
        <footer className="todo-list-footer">
          <p>Created By Shrikant Yadav</p>
        </footer>
     </div>
    </>
  )
}

export default TodoListApp;
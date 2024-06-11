import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'

const MyTasks = ({ tasks, handleOnDelete, handleOnEdit, handleMarkComplete }) => {
  return (
    <div className='my-task-list'>
      {
        tasks.map((task, index) => {
          return <div className={task.status === "completed" ? 'task-item completed' : "task-item"} key={task + index}>
            <span style={{ display: "flex", gap: "10px" }}>
              <span className='check-icon' onClick={() => handleMarkComplete(task)}>
                <FaCheck />
              </span>
              <span>
                {task?.title}
              </span>
            </span>
            <span className='task-item-actions'>
              {task.status !== "completed" && 
                <button className='edit-task' onClick={() => handleOnEdit(task)}>
                  <FaEdit />
                </button>
              }
              <button className='delete-task' onClick={() => handleOnDelete(task)}>
                <FaTrash />
              </button>
            </span>
          </div>
        })
      }
    </div>
  )
}

export default MyTasks
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'

const MyTasks = ({ tasks, handleOnDelete, handleOnEdit }) => {
  return (
    <div className='my-task-list'>
      {
        tasks.map((task, index) => {
          return <div className='task-item' key={task + index}>
            <span style={{display: "flex", gap: "10px"}}>
              <span className='check-icon'>
                <FaCheck />
              </span>
              <span>
                {task?.title}
              </span>
            </span>
            <span className='task-item-actions'>
              <button className='edit-task' onClick={() => handleOnEdit(task)}>
                <FaEdit />
              </button>
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
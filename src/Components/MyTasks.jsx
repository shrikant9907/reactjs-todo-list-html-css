import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'

const MyTasks = ({ tasks }) => {
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
                {task}
              </span>
            </span>
            <span className='task-item-actions'>
              <button className='edit-task'>
                <FaEdit />
              </button>
              <button className='delete-task'>
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
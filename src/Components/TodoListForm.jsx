import React from 'react'

const TodoListForm = () => {
  return (
    <form className='todo-list-form'>
        <label>Add task</label>
        <input
          placeholder='Add task here...'  
          type='text' 
        />
        <button className='submit-task-button' type="submit">Submit</button>
    </form>
  )
}

export default TodoListForm
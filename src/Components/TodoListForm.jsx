const TodoListForm = ({value, handleOnInputChange, handleOnSubmit, handleOnCancelEdit, editTask}) => {
  return (
    <form 
      className='todo-list-form'
      onSubmit={(e) => handleOnSubmit(e)}
      >
        <label>New task</label>
        <input
          placeholder='Add task here...'  
          type='text' 
          name={"title"}
          value={value}
          onChange={(e) => handleOnInputChange(e)}
        />
        <button className='submit-task-button' type="submit"> {editTask ? "Update" : "Add" } Task</button>
        {editTask && 
          <button className='cancel-edit-button' onClick={() => handleOnCancelEdit()} style={{marginLeft: "10px"}} type="button"> Cancel</button>
        }
    </form>
  )
}

export default TodoListForm
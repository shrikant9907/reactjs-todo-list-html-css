const TodoListForm = ({value, handleOnInputChange, handleOnSubmit}) => {
  return (
    <form 
      className='todo-list-form'
      onSubmit={(e) => handleOnSubmit(e)}
      >
        <label>Add task</label>
        <input
          placeholder='Add task here...'  
          type='text' 
          name={"title"}
          value={value}
          onChange={(e) => handleOnInputChange(e)}
        />
        <button className='submit-task-button' type="submit">Submit</button>
    </form>
  )
}

export default TodoListForm
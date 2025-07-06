import React, {useState, useReducer, useEffect} from 'react'
import Input from './common/Input'
import Button from './common/Button'
import { taskReducer } from '../Reducer/taskReducer'
function AddTask() {
  const [state, dispatch] = useReducer(taskReducer);
  const [task, setTask] = useState({
    id: Date.now(),
    title: '',
    completed: false
  });
  const handleChange = (e) => {{
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
}
const handleAddTask = (e) => {
  e.preventDefault();
  dispatch({
    type: 'ADD_TASK',
    payload: task
  })
}
useEffect(() => {
  console.log("Tasks updated:", state);
}, [state]);
  return (
    <div>
      <form>
        <Input type="text" placeholder="Enter task" name="title"  value={task.title} onChange={handleChange}/>
        <Button title="Add Task" onClick={handleAddTask} />
      </form>

    </div>
  )
}

export default AddTask
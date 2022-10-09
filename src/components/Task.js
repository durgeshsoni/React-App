import React from 'react'
import TaskItem from './TaskItem';

const Task = () => {
const [query, setQuery] = React.useState("");
const [tasks, setTasks] = React.useState([]);

const handleChnage =(e) =>{
    const {value} = e.target;
    setQuery(value);
}
const handleAdd = () =>{
    const payload = {
        title : query,
        status: false
    };

    let newTasks = [...tasks, payload];
    setTasks(newTasks);
}

  return (
    <center>
    <h2>Task</h2>
    <input value={query} onChange={handleChnage} placeholder='add somethings' />
    <button onClick={handleAdd}>Add</button>
        <div>
            {tasks.map((item,index) =>{
                    return <TaskItem color ={index%2 ==0 ? "blue" : "green"} {...item}/>
                
                })
            }
        </div>

    </center>
  )
}

export default Task
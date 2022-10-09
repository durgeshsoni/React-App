import React from 'react'

const TaskItem = ({title, status, color}) => {
  return (
    <div>
        
        <h3 style={{color}}>{ ` ${title} - ${status}`}</h3>
    </div>
  )
}

export default TaskItem
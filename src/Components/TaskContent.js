import React, { useState } from 'react'

function Tasks({id,content}) {
  const[isChecked] = useState(false);
  const[isStarred,setisStarred] = useState(false);


  const handleStarredChange = () => {
    setisStarred(!isStarred);
  }

  return (
    <div className='task1-des'>
    <input type='checkbox' checked={isChecked}  className='check-button' />
         <span>
          <i className={isChecked ? "fas fa-Check-Circle task-check" : "fas fa-Circle task-check"}></i>
         </span>
     <div className='task-des'>
        <div className='task-name'>
           {content}
        </div>
        <div className='task-days'>
          2 days left
        </div>
     </div>
     <div className='task-star'> 
         <button type='button'onChange={handleStarredChange} className='icon-button' >
          <i className={isStarred ? "fas fa-star" : "fas fa-star-half-alt"}></i>
         </button> 
     </div>
    </div>
  )
}

export default Tasks
import React, { useState } from 'react'

const StudentComponent = () => {
    const [date,setdate]=useState('')
  return (
    <div>
        <form action="" onSubmit={(e)=>{e.preventDefault()
             console.log(date)}}>
            <input type="datetime-local"  value={date} onChange={(e)=>{setdate(e.target.value)}}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default StudentComponent
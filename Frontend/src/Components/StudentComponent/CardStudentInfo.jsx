import React from 'react'
const CardStudentInfo = ({name,fathername,mobile,address,onclickcustom}) => {  
  return (
   
    <div className='p-4 border h-full sm:w-sm  flex  flex-col rounded-2xl gap-4' onClick={onclickcustom}>
        <span className='text-2xl font-extrabold p-2 '> Name - {name}</span>
        <span className='text-2xl font-bold'> Father's Name -{fathername}</span>
        <span className='text-2xl font-bold'> Mobile -{mobile}</span>
        <p> Address -{address}</p>
      

    </div>
    
  )
}

export default CardStudentInfo
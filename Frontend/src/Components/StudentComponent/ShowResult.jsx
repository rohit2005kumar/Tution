// import axios from 'axios'
// import React from 'react'
// import { useAuth } from '../Auth'
// import StudentInfoCard from './StudentInfoCard'
// import PaymentCardinfo from './PaymentCardInfo'

// const ShowResult = () => {
// const {searchstu}=useAuth();
// console.log(searchstu)
//   return (<div className='p-4 h-full   flex justify-center items-center flex-col rounded-2xl gap-4' >
//     { searchstu.length==0 ? <h2>No details found</h2> : <>
      
//     <StudentInfoCard studentInfo={searchstu}/>
          
         
//             <div className='bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl text-white text-center sm:w-md'>All Payment</div>
//           {
//             // searchstu.length==0? <h2>No details found</h2> :
           
//              !searchstu.paymentStudent ? <h2>No Payment Found </h2>: searchstu.paymentStudent.map((ele)=>{
//               return <PaymentCardinfo key={ele._id} payment={ele}/>
//             })
           
//           }
//           </>
// }
//     </div>
//   )
// }

// export default ShowResult


import axios from 'axios'
import React from 'react'
import { useAuth } from '../Auth'
import StudentInfoCard from './StudentInfoCard'
import PaymentCardinfo from './PaymentCardInfo'

const ShowResult = () => {
  const { searchstu } = useAuth();
  // console.log(searchstu);

  return (
    <div className=' h-full flex justify-center items-center flex-col rounded-2xl gap-4'>
      {searchstu.length==0 ? (
        <h2>No details found</h2>
      ) : (
        searchstu.map((ele)=><>
          <StudentInfoCard studentInfo={ele} key={ele._id} />

          <div className='bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl text-white text-center sm:w-md'>
            All Payment
          </div>
          {
            ele.paymentStudent.length==0 ? <h2>No Payment found</h2>: ele.paymentStudent.map((item)=><PaymentCardinfo payment={item} key={item.key}/>)
          }
          
        </>)
        
      )}
    </div>
  );
};

export default ShowResult;
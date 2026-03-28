import { Route, Routes ,Outlet} from "react-router-dom"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
// import Layout from "./Components/Layout"
import { AuthProvider } from "./Components/Auth"
import Protected from "./Components/Protected"
import StudentComponent from "./Components/StudentComponent"
import { ToastContainer } from "react-toastify"
import AddStudnet from "./Components/StudentComponent/AddStudnet"
import { AllStudent } from "./Components/StudentComponent/AllStudent"
import Payment from "./Components/StudentComponent/Payment"
import StudentInfo from "./Components/StudentComponent/StudentInfo"
import ShowResult from "./Components/StudentComponent/ShowResult"
import PageNotFound from "../PageNotFound"


function App() {
  

  return (
 <>
 <AuthProvider>
 <Routes>
  {/* <Route path="/" element={<Layout/>}> */}
    <Route path="/" element={<Protected><Dashboard/></Protected>} >
    <Route index element={<AllStudent/>}/>
    
    <Route path="addnew" element={<AddStudnet/>}/>
    
     <Route path="/search" element={<ShowResult/>}/>
    <Route path="payment" element={<Payment/>}/>
     <Route path="studentinfo/:id" element={<StudentInfo/>}/>
    </Route>
    
    <Route path="login" element={<Login/>}/>
    <Route path="*" element={<PageNotFound/>}/>
   
    {/* </Route> */}
  </Routes> 
  <ToastContainer/>
 </AuthProvider>

 </>
  )
}

export default App

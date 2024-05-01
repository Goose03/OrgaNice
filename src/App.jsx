import { Route, Routes, Link } from "react-router-dom"

import AboutPage from "./pages/about/AboutPage"
import Teacher from "./pages/teacher/clases/Teacher"
import ClaseInfo from "./pages/teacher/tareas/ClaseInfo"
import Login from "./pages/login/Login"
import SignUp from "./pages/login/SignUp"
import Student from "./pages/student/Student"
import UserSite from "./UserSite"

import NotFound from "./NotFound"
import NavBar from "./NavBar"
import { useState } from "react"

export default function App() {

  const [tipo, setTipo] = useState(0);

  return( 
  <>
    <NavBar />
    <Routes>  
      <Route path="/" element={<AboutPage />} /> 
      <Route path="/login" element={tipo == 1 ? <Student /> : tipo == 2 ? <Teacher /> : <Login tipo={setTipo} /> } />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacher/:id" element={<ClaseInfo />} />
      <Route path="/student" element={<Student />} />
      <Route path="/user" element={<UserSite />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

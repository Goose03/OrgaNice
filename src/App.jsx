import { Route, Routes, Link } from "react-router-dom"

import AboutPage from "./pages/about/AboutPage"
import Teacher from "./pages/teacher/clases/Teacher"
import ClaseInfo from "./pages/teacher/tareas/ClaseInfo"
import Login from "./pages/login/Login"
import SignUp from "./pages/login/SignUp"

import NotFound from "./NotFound"
import NavBar from "./NavBar"
import { useState } from "react"

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const toggleRoute = () => {
    setLoggedIn(!loggedIn);
  }

  return( 
  <>
    <NavBar />
    <Routes>  
      <Route path="/" element={<AboutPage />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacher/:id" element={<ClaseInfo />} />
      <Route path="/student" element={} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

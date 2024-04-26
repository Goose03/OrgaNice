import { Route, Routes, Link } from "react-router-dom"

import AboutPage from "./pages/about/AboutPage"
import Teacher from "./pages/teacher/clases/Teacher"
import ClaseInfo from "./pages/teacher/tareas/ClaseInfo"
import SignUp from "./pages/login/SignUp"

import NotFound from "./NotFound"
import Login from "./Login"

export default function App() {
  return( 
  <>
    <Login />
    <Routes>  
      <Route path="/" element={<AboutPage />} /> 
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacher/:id" element={<ClaseInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

import { Route, Routes, Link } from "react-router-dom"

import AboutPage from "./pages/about/AboutPage"
import Teacher from "./pages/teacher/clases/Teacher"
import ClaseInfo from "./pages/teacher/tareas/ClaseInfo"
import NotFound from "./NotFound"

import Login from "./login/SignUp"
export default function App() {
  return( 
  <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/teacher">Teacher</Link></li>
      </ul>
    </nav>
    <Routes>  
      <Route path="/" element={<AboutPage />} /> 
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacher/:id" element={<ClaseInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

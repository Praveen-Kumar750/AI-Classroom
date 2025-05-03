import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateAccount from "./create-account"
import EducationDetails from "./education-details"
import StudentType from "./student-type"
import ClassStream from "./class-stream"
import Dashboard from "./dashboard"
import "./styles.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/education-details" element={<EducationDetails />} />
        <Route path="/student-type" element={<StudentType />} />
        <Route path="/class-stream" element={<ClassStream />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

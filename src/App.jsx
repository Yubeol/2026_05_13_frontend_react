import './App.css'
import ScorePage from './pages/ScorePage'
import UserPage from './pages/UserPage'
import Employee from './pages/Employee'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const style = {
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/score" element={<ScorePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/employee" element={<Employee />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App

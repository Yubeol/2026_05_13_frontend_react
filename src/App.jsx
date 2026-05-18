import './App.css'
import ScorePage from './pages/ScorePage'
import UserPage from './pages/UserPage'
import EmployeePage from './pages/EmployeePage'
import HeaderBar from './components/HeaderBar'
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
    <HeaderBar/>  
      <Routes>
        <Route path="/score" element={<ScorePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App

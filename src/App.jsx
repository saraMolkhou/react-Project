import './App.css'
import { useState } from 'react'
import { CustomerPage } from './customerPage'
import {Routes, Route, useParams, BrowserRouter} from 'react-router-dom';
import { ManagerPage } from './managerPage'
import { SignInSide } from './signInSide';
  // import DentalClinicComponent from './DentalClinicComponent'
function App() {
const [count, setCount] = useState(0)

  return (
    <>
  
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerPage />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/login" element={<SignInSide />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
 
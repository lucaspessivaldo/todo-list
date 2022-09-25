import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Dashboard from './pages/dashboard/Dashboard'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import NavBar from './components/navbar/NavBar'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)

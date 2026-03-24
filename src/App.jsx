import IntroPage from './pages/IntroPage'
import createSession from "./pages/createSession"
import Login from "./pages/login"
import Reason from "./pages/reason"
import InterestedLanguages  from './pages/interestedlanguages'
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/signup" element={<createSession />} />
      <Route path="/login" element={<createSession />} />

      <Route path="/onboarding/reason" element={<Reason />} />
      <Route path="/onboarding/languages" element={<InterestedLanguages />} />
      <Route path="/dashboard" element={<Dashboard />} />
    
     </Routes>
    </BrowserRouter>
  )
}
import IntroPage from './pages/IntroPage'
import Login from "./pages/login"
import SignUp from "./pages/signup"
import Reason from "./pages/reason"
import InterestedLanguages  from './pages/interestedlanguages'
import Dashboard from "./pages/Dashboard"
import Exercises from "./pages/exercises"
import Input from "./pages/input"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { OnboardingProvider } from "./context/OnboardingContext"


export default function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/onboarding/reason" 
      element={
       <OnboardingProvider>
        <Reason /> 
        </OnboardingProvider>}
      />

      <Route path="/onboarding/languages" 
      element={
        <OnboardingProvider>
      <InterestedLanguages />
      </OnboardingProvider>}
     />
    
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/input" element={<Input />} />
      <Route path="/exercises" element={<Exercises />} />
  
     </Routes>
    </BrowserRouter>
  )
}
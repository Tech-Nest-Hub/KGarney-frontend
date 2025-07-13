import { Routes, Route, Navigate } from "react-router-dom"
import AuthContainer from "./features/auth/components/AuthContainer"
import Dashboard from "./features/auth/pages/dashboard"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<AuthContainer />} />
      <Route path="/register" element={<AuthContainer />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App

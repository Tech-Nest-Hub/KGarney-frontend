import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthContainer from "./features/auth/components/AuthContainer"

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<AuthContainer />} />
      <Route path="/register" element={<AuthContainer />} />
      {/* Optional: redirect "/" to "/login" */}
    </Routes>
  </Router>
)

export default App
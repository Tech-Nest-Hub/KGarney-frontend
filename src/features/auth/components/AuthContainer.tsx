import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import LoginForm from "../pages/LoginPage"
import RegisterForm from "../pages/RegisterPage"
import IllustrationPanel from "./IllustrationPanel"
import type { AuthMode } from "../types/types"

const AuthContainer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const pathToMode = (path: string): AuthMode => {
    if (path === "/register") return "register"
    return "login"
  }

  const [authMode, setAuthMode] = useState<AuthMode>(pathToMode(location.pathname))
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const mode = pathToMode(location.pathname)
    if (mode !== authMode) {
      setIsTransitioning(true)
      setTimeout(() => {
        setAuthMode(mode)
        setIsTransitioning(false)
      }, 150)
    }
  }, [location.pathname])

  const handleModeChange = (newMode: AuthMode) => {
    if (newMode === authMode) return

    setIsTransitioning(true)
    setTimeout(() => {
      setAuthMode(newMode)
      setIsTransitioning(false)
      navigate(newMode === "login" ? "/login" : "/register", { replace: true })
    }, 150)
  }

  const handleAuthSuccess = (token: string) => {
    localStorage.setItem("token", token)
    console.log("Authentication successful!", token)

    if (authMode === "register") {
      navigate("/login", { replace: true })
    } else {
      navigate("/dashboard", { replace: true })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full min-h-[600px] flex">
        {/* Illustration Panel */}
        <IllustrationPanel authMode={authMode} />

        {/* Form Panel */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
              isTransitioning
                ? authMode === "login"
                  ? "transform translate-x-full"
                  : "transform -translate-x-full"
                : "transform translate-x-0"
            }`}
          >
            {authMode === "login" ? (
              <LoginForm
                onSuccess={handleAuthSuccess}
                onSwitchToRegister={() => handleModeChange("register")}
              />
            ) : (
              <RegisterForm
                onSuccess={handleAuthSuccess}
                onSwitchToLogin={() => handleModeChange("login")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthContainer

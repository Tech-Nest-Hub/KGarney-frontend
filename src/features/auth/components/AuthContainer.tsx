"use client"

import type React from "react"
import { useState } from "react"
import type { AuthMode } from "../types/types"
import LoginForm from "../pages/LoginPage"
import RegisterForm from "../pages/RegisterPage"
import IllustrationPanel from "./IllustrationPanel"

const AuthContainer: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("login")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleModeChange = (newMode: AuthMode) => {
    if (newMode === authMode) return

    setIsTransitioning(true)
    setTimeout(() => {
      setAuthMode(newMode)
      setIsTransitioning(false)
    }, 150)
  }

  const handleAuthSuccess = (token: string) => {
    localStorage.setItem("token", token)
    console.log("Authentication successful!", token)
    // Here you would typically redirect to dashboard
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
              <LoginForm onSuccess={handleAuthSuccess} onSwitchToRegister={() => handleModeChange("register")} />
            ) : (
              <RegisterForm onSuccess={handleAuthSuccess} onSwitchToLogin={() => handleModeChange("login")} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthContainer

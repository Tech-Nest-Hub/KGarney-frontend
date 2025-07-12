import type React from "react"
import type { AuthMode } from "../types/types"

interface IllustrationPanelProps {
  authMode: AuthMode
}

const IllustrationPanel: React.FC<IllustrationPanelProps> = ({ authMode }) => {
  return (
    <div className="flex-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden flex items-center justify-center">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-5 w-12 h-12 bg-white/10 rounded-full"></div>

      {/* Main illustration area */}
      <div className="relative z-10 text-center text-white p-8">
        {/* 3D Character illustration placeholder */}
        <div className="mb-8 relative">
          <div className="w-64 h-64 mx-auto relative">
            {/* Chair */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-orange-300 rounded-t-3xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-36 h-6 bg-orange-400 rounded-full"></div>

            {/* Person */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              {/* Body */}
              <div className="w-12 h-16 bg-red-400 rounded-t-full mx-auto"></div>
              {/* Head */}
              <div className="w-10 h-10 bg-orange-200 rounded-full mx-auto -mt-2 relative">
                {/* Hair */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-orange-400 rounded-t-full"></div>
              </div>
              {/* Tablet */}
              <div className="w-8 h-6 bg-gray-700 rounded mx-auto mt-2"></div>
            </div>

            {/* Lamp */}
            <div className="absolute top-8 right-8">
              <div className="w-2 h-16 bg-yellow-600 mx-auto"></div>
              <div className="w-8 h-6 bg-yellow-200 rounded-t-full -mt-1"></div>
            </div>

            {/* Plant */}
            <div className="absolute bottom-4 right-4">
              <div className="w-4 h-6 bg-green-400 rounded-t-full mx-auto"></div>
              <div className="w-6 h-4 bg-green-600 rounded-full -mt-1"></div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{authMode === "login" ? "Welcome Back!" : "Join Our Community!"}</h2>
          <p className="text-purple-100 text-lg">
            {authMode === "login" ? "We're so excited to see you again!" : "Start your journey with us today!"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default IllustrationPanel

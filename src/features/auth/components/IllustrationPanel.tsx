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

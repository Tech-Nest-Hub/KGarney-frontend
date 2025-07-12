export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  success: boolean
  token?: string
  user?: {
    id: string
    name: string
    email: string
  }
  message?: string
}

export type AuthMode = "login" | "register"

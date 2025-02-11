export interface User {
  id: string
  fullName: string
  email: string
  role: "admin" | "manager" | "user"
  status: "active" | "inactive"
  avatarUrl?: string
  teamId?: string
  createdAt: Date
  lastActive?: Date
}


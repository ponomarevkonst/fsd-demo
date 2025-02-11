import { TableCell } from "@/shared/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Badge } from "@/shared/ui/badge"
import type { User } from "@/shared/contracts"

export function UserTableRow({ user }: { user: User }) {
  return (
    <>
      <TableCell className="font-medium">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={user.avatarUrl} alt={user.fullName} />
            <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
          </Avatar>
          {user.fullName}
        </div>
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <Badge variant={user.role === "admin" ? "destructive" : user.role === "manager" ? "default" : "secondary"}>
          {user.role}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
      </TableCell>
      <TableCell suppressHydrationWarning>{user.lastActive?.toLocaleString()}</TableCell>
    </>
  )
}


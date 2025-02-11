import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu"
import { Button } from "@/shared/ui/button"
import { MoreHorizontal } from "lucide-react"
import { SetRoleButton } from "@/features/users/set-role"
import { DeleteUserButton } from "@/features/users/delete"

export function ActionDropdown({ userId }: { userId: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <SetRoleButton userId={userId} />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <DeleteUserButton userId={userId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


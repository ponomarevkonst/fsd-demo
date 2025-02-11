import { Button } from "@/shared/ui/button"
import { Plus } from "lucide-react"

export function InviteUserButton() {
  return (
    <Button>
      <Plus className="mr-2 h-4 w-4" /> Invite User
    </Button>
  )
}


import { Table, TableBody, TableCell, TableHead, TableRow as TableRowUI } from "@/shared/ui/table"
import type { User } from "@/shared/contracts"
import { TableHeader } from "./table-header"
import { ActionDropdown } from "./action-dropdown"
import { UserTableRow } from "@/entities/user"

export function UsersTable() {
  // This would typically fetch data from an API
  const users: User[] = [
    {
      id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
      lastActive: new Date(),
      createdAt: new Date(),
    },
    {
      id: "2",
      fullName: "Jane Smith",
      email: "jane@example.com",
      role: "manager",
      status: "active",
      lastActive: new Date(),
      createdAt: new Date(),
    },
  ]

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader />
        <TableBody>
          {users.map((user) => (
            <TableRowUI key={user.id}>
              <UserTableRow user={user} />
              <TableCell>
                <ActionDropdown userId={user.id} />
              </TableCell>
            </TableRowUI>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

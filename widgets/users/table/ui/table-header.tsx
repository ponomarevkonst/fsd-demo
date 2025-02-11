import { TableHead, TableRow, TableHeader as TableHeaderUI } from "@/shared/ui/table"

export function TableHeader() {
  return (
    <TableHeaderUI>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Last Active</TableHead>
      <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeaderUI>
  )
}


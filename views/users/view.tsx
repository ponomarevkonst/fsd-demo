import { UsersTable } from "@/widgets/users/table"
import { InviteUserButton } from "@/features/users/invite-new-user"

export function UsersView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
              User Management
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Manage your organization's users and their roles
            </p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Users</h2>
            <InviteUserButton />
          </div>
          <UsersTable />
        </div>
      </div>
    </div>
  )
}


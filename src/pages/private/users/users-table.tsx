import { cn } from "@/lib/utils";
import BaseTable, {
  type BaseTableColumn,
} from "@/components/layout/ui/tables/base-table";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Editor",
    status: "Inactive",
    createdAt: "2024-02-01",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "User",
    status: "Active",
    createdAt: "2024-02-10",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-02-15",
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    role: "Editor",
    status: "Active",
    createdAt: "2024-02-20",
  },
  {
    id: "7",
    name: "Edward Norton",
    email: "edward.norton@example.com",
    role: "User",
    status: "Inactive",
    createdAt: "2024-03-01",
  },
  {
    id: "8",
    name: "Fiona Apple",
    email: "fiona.apple@example.com",
    role: "User",
    status: "Active",
    createdAt: "2024-03-05",
  },
];

interface UsersTableProps {
  onRowClick?: (user: User, id: string) => void;
  defaultSelectedId?: string | null;
}

function UsersTable({ onRowClick, defaultSelectedId = null }: UsersTableProps) {
  const columns: BaseTableColumn<User>[] = [
    {
      key: "name",
      header: "Name",
      render: (user, isSelected) => (
        <div className="px-4 py-3">
          <p
            className={cn(
              "font-medium",
              isSelected && "text-primary-foreground"
            )}
          >
            {user.name}
          </p>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
      render: (user, isSelected) => (
        <div className="px-4 py-3">
          <p
            className={cn(
              "text-sm text-muted-foreground",
              isSelected && "text-primary-foreground"
            )}
          >
            {user.email}
          </p>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (user, isSelected) => (
        <div className="px-4 py-3">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              isSelected
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {user.role}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (user, isSelected) => (
        <div className="px-4 py-3">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              user.status === "Active"
                ? isSelected
                  ? "bg-green-500/20 text-green-400"
                  : "bg-green-500/10 text-green-600"
                : isSelected
                ? "bg-gray-500/20 text-gray-400"
                : "bg-gray-500/10 text-gray-600"
            )}
          >
            {user.status}
          </span>
        </div>
      ),
    },
    {
      key: "createdAt",
      header: "Created",
      render: (user, isSelected) => (
        <div className="px-4 py-3">
          <p
            className={cn(
              "text-sm text-muted-foreground",
              isSelected && "text-primary-foreground"
            )}
          >
            {user.createdAt}
          </p>
        </div>
      ),
    },
  ];

  return (
    <BaseTable<User>
      data={mockUsers}
      columns={columns}
      getRowId={(user) => user.id}
      defaultSelectedId={defaultSelectedId}
      onRowClick={onRowClick}
    />
  );
}

export default UsersTable;
export type { User };

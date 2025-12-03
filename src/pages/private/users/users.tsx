import { useState } from "react";
import Section from "@/components/layout/section/section";
import SectionBody from "@/components/layout/section/section-body";
import SectionToolbar from "@/components/layout/section/section-toolbar";
import UsersTable, { type User } from "./users-table";
import UsersDetail from "./users-detail";
import { cn } from "@/lib/utils";

function Users() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleUserSelect = (user: User, id: string) => {
    setSelectedUser(user);
    setSelectedUserId(id);
  };

  const isRightPanelVisible = selectedUser !== null;

  const handleCloseDetail = () => {
    setSelectedUser(null);
    setSelectedUserId(null);
  };

  return (
    <div className="relative h-full w-full flex flex-col">
      <div
        className={cn(
          "flex flex-1 min-h-0 w-full flex-col md:flex-row",
          isRightPanelVisible ? "md:gap-2" : "md:gap-0"
        )}
      >
        {/* Left Section - Users Table */}
        <div
          className={cn(
            "shrink-0 flex-1 transition-all duration-200 min-w-0 flex flex-col",
            isRightPanelVisible ? "md:w-[calc(50%-0.25rem)] w-full" : "w-full"
          )}
        >
          <Section className="h-full flex flex-col">
            <SectionToolbar title="Users" />
            <SectionBody className="flex-1 min-h-0">
              <UsersTable
                onRowClick={handleUserSelect}
                defaultSelectedId={selectedUserId}
              />
            </SectionBody>
          </Section>
        </div>

        {/* Right Section - Users Detail (Desktop) */}
        <div
          className={cn(
            "hidden md:block shrink-0 transition-all duration-200 min-w-0",
            isRightPanelVisible ? "md:w-[calc(50%-0.25rem)]" : "md:w-0"
          )}
        >
          {selectedUser && (
            <Section className="h-full">
              <UsersDetail user={selectedUser} />
            </Section>
          )}
        </div>
      </div>

      {/* Mobile Detail Overlay */}
      {selectedUser && (
        <div className="md:hidden fixed inset-0 z-30 bg-background/95 backdrop-blur-xl p-2">
          <Section className="h-full">
            <UsersDetail user={selectedUser} onClose={handleCloseDetail} />
          </Section>
        </div>
      )}
    </div>
  );
}

export default Users;

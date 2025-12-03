import SectionBody from "@/components/layout/section/section-body";
import SectionToolbar from "@/components/layout/section/section-toolbar";
import { type User } from "./users-table";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface UsersDetailProps {
  user: User;
  onClose?: () => void;
}

function UsersDetail({ user, onClose }: UsersDetailProps) {
  return (
    <>
      <SectionToolbar title={user.name} className="justify-between">
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </SectionToolbar>
      <SectionBody className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Role
              </label>
              <p className="mt-1 text-sm">{user.role}</p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </label>
              <p className="mt-1 text-sm">{user.status}</p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Created At
              </label>
              <p className="mt-1 text-sm">{user.createdAt}</p>
            </div>
          </div>
        </div>
      </SectionBody>
    </>
  );
}

export default UsersDetail;

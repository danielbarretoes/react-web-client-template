import { useSidebar } from "./sidebar-context";
import { navGroups } from "@/components/router";
import SidebarNavGroup from "./sidebar-nav-group";
import Section from "../section/section";
import SectionToolbar from "../section/section-toolbar";
import SectionBody from "../section/section-body";
import SidebarToolbar from "./sidebar-toolbar";
import { cn } from "@/lib/utils";

const SIDEBAR_WIDTH = 320; // 16 * 20 = 320px (w-64)
const COLLAPSED_WIDTH = 72; // Aumentado para evitar que se corte el fondo circular

function Sidebar() {
  const { isCollapsed, isMobileOpen, closeMobileSidebar } = useSidebar();

  return (
    <>
      {/* Backdrop para móvil */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "flex flex-col h-full transition-all duration-300 ease-in-out shrink-0 overflow-hidden overflow-x-hidden",
          // En móvil: fixed overlay
          "md:relative fixed top-0 left-0 z-50 md:z-auto",
          // Animación de entrada/salida en móvil
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
        style={{
          width: isCollapsed ? `${COLLAPSED_WIDTH}px` : `${SIDEBAR_WIDTH}px`,
        }}
      >
        <Section className="md:bg-transparent bg-background/95 backdrop-blur-xl">
          <SectionToolbar
            title={isCollapsed ? undefined : "Template"}
            className={cn(isCollapsed ? "px-2" : "px-4")}
          >
            <SidebarToolbar />
          </SectionToolbar>
          <SectionBody
            className={cn(
              "space-y-4 py-4 transition-all duration-300 overflow-hidden overflow-x-hidden",
              isCollapsed ? "px-2" : "px-4"
            )}
          >
            <nav className="min-w-0 overflow-hidden overflow-x-hidden">
              <div className="space-y-1">
                {navGroups.map((group, index) => (
                  <SidebarNavGroup
                    key={group.title || `group-${index}`}
                    group={group}
                  />
                ))}
              </div>
            </nav>
          </SectionBody>
        </Section>
      </aside>
    </>
  );
}

export default Sidebar;

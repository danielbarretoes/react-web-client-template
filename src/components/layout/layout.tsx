import Sidebar from "./sidebar/sidebar";
import { SidebarProvider } from "./sidebar/sidebar-context";
import backgroundImage from "@/assets/background-image-light.jpg";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  backgroundImage?: string;
  backgroundColor?: string;
}

function Layout({
  backgroundImage: customBackgroundImage,
  backgroundColor = undefined, //"primary",
}: LayoutProps = {}) {
  const defaultBackgroundImage = customBackgroundImage || backgroundImage;
  const hasBackgroundImage = defaultBackgroundImage && !backgroundColor;

  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-screen overflow-hidden">
        {/* Background */}
        <div
          className={cn(
            "fixed inset-0 -z-10",
            hasBackgroundImage && "bg-cover bg-center bg-no-repeat bg-fixed"
          )}
          style={{
            ...(hasBackgroundImage && {
              backgroundImage: `url(${defaultBackgroundImage})`,
            }),
            ...(backgroundColor && {
              backgroundColor: backgroundColor,
            }),
          }}
        />

        <div className="flex flex-1 md:p-2 p-0 md:gap-2 gap-0">
          {/* Sidebar */}
          <Sidebar />

          {/* Content */}
          <main className="flex-1 overflow-auto transition-all duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Layout;

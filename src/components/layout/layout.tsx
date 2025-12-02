import Sidebar from "./sidebar/sidebar";
import { SidebarProvider } from "./sidebar/sidebar-context";
import Content from "./content/content";
import backgroundImage from "@/assets/background-image-light.jpg";

function Layout() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-screen">
        {/* Background image */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <Sidebar />
        <Content />
      </div>
    </SidebarProvider>
  );
}

export default Layout;

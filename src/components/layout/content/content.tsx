import { Outlet } from "react-router-dom";

function Content() {
  return (
    <main className="flex-1 overflow-auto transition-all duration-300">
      <div className="p-4">
        <Outlet />
      </div>
    </main>
  );
}

export default Content;

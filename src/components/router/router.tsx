import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";
import { Home, Users, Settings } from "../../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

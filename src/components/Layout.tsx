import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import LargeLayout from "./LargeLayout";
import SmallLayout from "./SmallLayout";

const Layout = () => {
  return (
    <>
      <SmallLayout/>
      <LargeLayout/>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import AdminSider from "./AdminSider";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <>
      <div className="w-full flex justify-between ">
        <div className={`${toggle? "w-[50px]" : "w-[100px]"}`}>
          <AdminSider />
        </div>
        <div className="w-full h-[120vh] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

import { Outlet } from "react-router-dom";
import AdminSider from "./AdminSider";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const AdminLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full flex justify-between h-full">
        <div className="max-sm:justify-end max-sm:flex w-full absolute hidden">
          <div
            className=" absolute top-2 right-8 "
            onClick={() => {
              onShow();
            }}
          >
            <GiHamburgerMenu className=" fixed text-2xl text-white hover:cursor-pointer hover:scale-125 transition-all duration-500" />
          </div>
        </div>
        <div className={`${toggle ? "w-[50px]" : "w-[85px]"} max-sm:hidden `}>
          <AdminSider />
        </div>
        <div className="w-full h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

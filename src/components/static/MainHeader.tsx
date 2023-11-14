import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MainHeader = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full h-[60px] flex justify-center items-center bg-green-500 text-white">
        <div className="w-[95%] h-full justify-between flex items-center">
          <div>Dir2School</div>
          <div
            className="flex items-center justify-center relative cursor-pointer"
            onClick={() => {
              onShow();
            }}
          >
            <div className="mr-2 ">Kossyrisochukwu</div>
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
            {show ? (
              <button className="absolute mt-14 px-4 py-2 bg-black text-white rounded-full text-[13px] hover:cursor-pointer">
                LogOut
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;

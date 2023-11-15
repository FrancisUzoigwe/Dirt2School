import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MainHeader = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <>
      {scroll ? (
        <div className="w-full h-[60px] max-sm:h-[45px] flex justify-center items-center bg-green-500 text-black ">
          <div
            className="w-full h-full justify-between flex transition-all duration-300 px-7 items-center fixed"
            style={{
              width: "100%",
              height: "60px",
              backdropFilter: "blur(4px)",
            }}
          >
            <div>Dirt2School</div>
            <div
              className="flex items-center justify-center relative cursor-pointer"
              onClick={() => {
                onShow();
              }}
            >
              <div className="mr-2 max-sm:text-[11px] max-sm:mr-1">
                Kossyrisochukwu
              </div>
              <div>
                <MdOutlineKeyboardArrowDown />
              </div>
              {show ? (
                <button
                  className="absolute mt-14 px-4 py-2 bg-black text-white rounded-full text-[13px] hover:cursor-pointer"
                  onClick={() => {
                    alert("Login out...");
                  }}
                >
                  LogOut
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[50px] max-sm:h-[45px] flex justify-center items-center bg-green-500 text-white ">
          <div className="w-full px-8 h-full justify-between flex  items-center transition-all duration-300">
            <div>Dirt2School</div>
            <div
              className="flex items-center justify-center relative cursor-pointer"
              onClick={() => {
                onShow();
              }}
            >
              <div className="mr-2 max-sm:text-[11px] max-sm:mr-1">
                Kossyrisochukwu
              </div>
              <div>
                <MdOutlineKeyboardArrowDown />
              </div>
              {show ? (
                <button
                  className="absolute mt-14 px-4 py-2 bg-black text-white rounded-full text-[13px] hover:cursor-pointer"
                  onClick={() => {
                    alert("Login out...");
                  }}
                >
                  LogOut
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;

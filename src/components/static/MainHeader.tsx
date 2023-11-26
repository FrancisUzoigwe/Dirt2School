import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/globalState";
import { useSelector } from "react-redux";
const MainHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

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
      <div className="w-full h-[60px] max-sm:h-[50px] flex justify-center items-center bg-green-500 text-black ">
        <div
          className="w-full h-full justify-between flex transition-all duration-300 px-7 items-center fixed"
          // style={{
          //   width: "100%",
          //   height: "60px",
          //   backdropFilter: "blur(4px)",
          // }}
        >
          <div>Dirt2School</div>
          <div
            className="flex items-center justify-center relative cursor-pointer"
            onClick={() => {
              onShow();
            }}
          >
            <div className="mr-2 max-sm:hidden max-sm:mr-1 font-bold text-white">
             Francis
            </div>
            {!show ? (
              <div className="">
                <MdOutlineKeyboardArrowDown className="max-sm:hidden flex transition-all duration-500 text-white " />
              </div>
            ) : (
              <div className="">
                <MdOutlineKeyboardArrowDown className="rotate-180 max-sm:hidden flex transition-all duration-500 text-white" />
              </div>
            )}
            {show ? (
              <div className=" flex flex-col items-center absolute mt-14 top-0 bg-gray-300 w-[150px]  rounded-md h-[75px]">
                <div className="text-black  font-bold my-2 hover:text-gray-500 duration-300 transition-all">
                  Update Profile
                </div>
                <button
                  className="absolute mt-9 text-black rounded-full w-full hover:text-gray-500 duration-300 transition-all  hover:cursor-pointer font-bold "
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  LogOut
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;

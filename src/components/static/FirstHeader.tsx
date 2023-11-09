import { useState } from "react";
import { Link } from "react-router-dom";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);

    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <>
      {!scroll ? (
        <div className="w-full h-[60px] justify-center items-center flex">
          <div className="w-[95%] h-full justify-between items-center flex fixed">
            <div className="max-sm:text-[10px] max-sm:font-bold">
              Dirt2School
            </div>
            <Link to="/signin">
              <button className="px-4 py-2 rounded-full bg-green-700 text-white max-sm:text-[10px] max-sm:font-bold">
                Get Involved
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full h-[60px] justify-center items-center flex">
          <div className="w-[95%] h-full justify-between items-center flex fixed z-50">
            <div className="max-sm:text-[10px] max-sm:font-bold">
              Dirt2School
            </div>
            <Link to="/signin">
              <button className="px-4 py-2 rounded-full bg-green-700 text-white max-sm:text-[10px] max-sm:font-bold">
                Get Involved
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstHeader;
